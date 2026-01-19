// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";


import usersRouter from "./routes/users/index.js";  // Importar routers y renombrar
import postsRouter from "./routes/posts/index.js";

import errorHandler from "./middlewares/errorHandler.js"; // Importar middlewares de errores

const app = express();

console.log("MONGO_URL:", process.env.MONGO_URL);   ///verificar que se está leyendo correctamente

// Middleware global
app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));   //Dirección del frontend permitido para comunicarse con el backend.

app.use(express.json());            // Permite leer JSON desde req.body

console.log("Montando routers...");

// Montaje de router
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);     /// Define el prefijo /api/posts para todas las rutas de postsRouter

// Si ninguna ruta responde, llega aquí
app.use((req, res, next) => {
    const error = new Error(`Resource not found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
});
app.use(errorHandler);  //Si salta next, lo manda al errorHandler.js


// Conexión a MongoDB
const connectDB = async () => {
    const dbUrl = process.env.NODE_ENV === 'test'       /// elige la URL de la base de datos según el entorno (entorno que se define en env)
        ? process.env.MONGO_URL_TEST                    /// Si NODE_ENV es "test", usa MONGO_URL_TEST
        : process.env.MONGO_URL

    try {
        await mongoose.connect(dbUrl);                  /// Conecta a MongoDB
        console.log("✅ MongoDB connected", dbUrl);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};


// Arranque del servidor
const PORT = process.env.PORT || 4000;  //Puerto donde se levanta el servidor Express

connectDB().then(() => {                /// Conecta a MongoDB y luego levanta el servidor
    app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
});


//Permite peticiones desde otros orígenes (CORS). Tienes que definir en env cual frontend permites.


///NODE_ENV=test node server.js