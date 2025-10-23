import jwt from "jsonwebtoken"

export default function authMiddleware(req, res, next) {        //  Declara un middleware que se ejecuta antes de llegar al handler
    try {
        const token = req.headers.authorization?.split(" ")[1]  /// Busca el token en el header Authorization. SPLIT(" ") para separa por espacio y quedarse con el 2º elemento(SIN BEARER)
        if (!token) return res.status(401).json({ error: "No token" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)   /// Verifica y decodifica el token usando tu clave secreta (JWT_SECRET)
        req.userId = decoded.sub /// Extrae el campo sub (subject) del token — normalmente el ID del usuario — y lo guarda en req.userId
        next()
    } catch (err) {
        res.status(401).json({ error: "Token inválido" })
    }
}