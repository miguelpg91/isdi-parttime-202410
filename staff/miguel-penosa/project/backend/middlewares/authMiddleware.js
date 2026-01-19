import jwt from "jsonwebtoken"      /// importa la libreria

export default function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1]  /// Busca el token en el header Authorization. SPLIT(" ") para separa por espacio y quedarse con el 2º elemento(SIN BEARER)
        if (!token) return res.status(401).json({ error: "No token" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)   /// Verifica y decodifica el token usando tu clave secreta (JWT_SECRET)
        req.userId = decoded.sub /// Extrae el campo sub (subject) del token — normalmente el ID del usuario — y lo guarda en req.userId
        next()      /// Todo bien, pasa al siguiente middleware o handler”
    } catch (err) {
        res.status(401).json({ error: "Token inválido" })
    }
}

/// MIDDLEWARE

// authMiddleware: se usa para (una vez obtenido el token) verificar cualquier peticion protegida (Que requiera de Authorization: Bearer token)






/*


req.headers     →   todos los headers HTTP

?.   →    Si existe header, úsalo; si no, devuelve undefined y no rompas

.split(" ")     →   Separa en: ["Bearer", "TOKEN123"]

[1]     →   coge solo el token real



*/

/*

decoded:

{
  sub: "64af...",
  iat: 123456,
  exp: 123999
}

req.userId = decoded.sub

-Extrae el ID del usuario del token


*/