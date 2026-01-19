import logic from "../../../logic/index.js";
import jwt from "jsonwebtoken";

export default async function registerUserHandler(req, res, next) {
    try {
        const { email, username, password } = req.body;

        await logic.registerUser(email, username, password);

        res.status(201).json({ message: "Usuario registrado correctamente" });

    } catch (error) {
        next(error);
    }
}