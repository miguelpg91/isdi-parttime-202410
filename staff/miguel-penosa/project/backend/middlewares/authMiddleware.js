import jwt from "jsonwebtoken"

export default function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1] // "Bearer TOKEN"
        if (!token) return res.status(401).json({ error: "No token" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)   ///???
        req.userId = decoded.sub // ahora req.userId existe         ///???
        next()
    } catch (err) {
        res.status(401).json({ error: "Token inválido" })
    }
}