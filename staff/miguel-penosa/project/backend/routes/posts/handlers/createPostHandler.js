import logic from "../../../logic/index.js"

export default async function createPostHandler(req, res, next) {
    try {
        const { ciudad, text, precio, imagen, tipo } = req.body

        const { userId } = req

        const newPost = await logic.createPost(
            ciudad,
            text,
            Number(precio),
            imagen,
            tipo,
            userId
        )
    } catch (error) {
        next(error.message)
    }
}

