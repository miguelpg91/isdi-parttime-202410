import logic from "../../../logic/index.js"

export default async function deletePostHandler(req, res, next) {
    try {
        const postId = req.params.id
        const userId = req.userId // viene del middleware

        console.log("DELETE postId:", postId, "userId:", userId) // <-- prueba

        await logic.deletePost(postId, userId)

        res.status(200).json({ message: "Post eliminado correctamente" })
    } catch (error) {
        next(error)
    }
}