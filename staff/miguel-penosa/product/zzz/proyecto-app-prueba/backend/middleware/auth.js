export function authMiddleware(req, res, next) {
    const { email } = req.headers; // Supongamos que el email se manda en el header
    if (!email) {
        return res.status(401).json({ message: "No autorizado" });
    }
    next();
}