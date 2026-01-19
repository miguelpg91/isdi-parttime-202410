import logic from "../../../logic/index.js"

export default async function deletePostHandler(req, res, next) {
    try {
        const postId = req.params.id    /// Obtiene el id del post desde la URL.
        const userId = req.userId       // Obtiene el id del usuario autenticado

        console.log("DELETE postId:", postId, "userId:", userId) // para verificar qué datos llegan al handler.

        await logic.deletePost(postId, userId)

        res.status(200).json({ message: "Post eliminado correctamente" })
    } catch (error) {
        next(error)     /// Nos llevaria a errorHandler.js
    }
}