mport express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Conectar a MongoDB
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log("Error al conectar a MongoDB:", err));

const app = express();
app.use(express.json());
app.use(cors());

// Definir el modelo de Usuario con Mongoose
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

// Registro de usuario
app.post("/api/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya existe" });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear y guardar el nuevo usuario
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Generar el token JWT
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "Usuario registrado exitosamente.", token });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar", error: error.message });
    }
});

// Login
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({ token, user: { email } });
    }

    res.status(401).json({ message: "Credenciales incorrectas" });
});

// Obtener usuario autenticado (ruta protegida)
app.get("/api/user", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Acceso denegado" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ user: { email: decoded.email } });
    } catch {
        res.status(403).json({ message: "Token inválido" });
    }
});

app.listen(4000, () => console.log("Server running on port 4000"));