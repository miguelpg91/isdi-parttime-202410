import logic from "../../../logic/index.js";
import jwt from "jsonwebtoken";

export default async function registerUserHandler(req, res, next) {
    try {
        // ahora desestructuramos igual que el frontend envía
        const { email, username, password } = req.body;

        // y llamamos a registerUser con los mismos parámetros
        const user = await logic.registerUser(email, username, password);

        // puedes usar el id del user creado para el token
        const payload = { sub: user._id.toString() };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        res.json({ token, user });
    } catch (error) {
        next(error);
    }
}