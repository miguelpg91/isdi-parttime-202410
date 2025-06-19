export default function errorHandler(err, req, res, next) {
    console.error(err);  // Agrega el paréntesis de cierre
    res.status(500).json({ error: err.message });
}