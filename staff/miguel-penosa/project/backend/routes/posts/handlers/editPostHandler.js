import logic from "../../../logic/index.js"

export default async function editPostHandler(req, res, next) {
    try {
        const { id } = req.params
        const { tipo, ciudad, precio, text, imagen } = req.body

        const updatePost = await logic.editPost(id, {
            tipo,
            ciudad,
            precio: Number(precio),
            text,
            imagen
        })

        res.status(200).json(updatePost)
    } catch (error) {
        next(error)
    }
}

