// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";


import usersRouter from "./routes/users/index.js";  // Importar routers
import postsRouter from "./routes/posts/index.js";

import errorHandler from "./middlewares/errorHandler.js"; // Importar middlewares de errores

const app = express();

console.log("MONGO_URL:", process.env.MONGO_URL);   ///verificar que se está leyendo correctamente

// Middleware global
app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
app.use(express.json()); // Para parsear JSON en body

console.log("Montando routers...");

// Rutas
app.use("/api/users", usersRouter);     // /api no se incluye en la ruta final en fetch (ya va dentro del API_URL )
app.use("/api/posts", postsRouter);

// 404 + manejo de errores : Si ninguna ruta responde, llega aquí
app.use((req, res, next) => {
    const error = new Error(`Resource not found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
});
app.use(errorHandler);  //Si salta next, lo manda al errorHandler.js

// Conexión a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

// Arranque del servidor
const PORT = process.env.PORT || 4000;  //primero intenta conectar a MongoDB, levanta el servidor Express para aceptar peticiones

connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
});
