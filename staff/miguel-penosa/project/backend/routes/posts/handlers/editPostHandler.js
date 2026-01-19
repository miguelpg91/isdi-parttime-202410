import logic from "../../../logic/index.js"

export default async function editPostHandler(req, res, next) {
    try {
        const { id } = req.params       /// Saca el id del post obtenido de la URL (/posts/:id), generado por MongoDB al crear el Post
        const userId = req.userId
        const { tipo, ciudad, precio, text, imagen } = req.body     // Extrae los datos enviados en el body

        const updatePost = await logic.editPost(
            id,                                                /// id del post a editar
            userId,
            {
                tipo,
                ciudad,
                precio: Number(precio),         /// se convierte a Number porque del body llega como string
                text,
                imagen
            }
        )

        res.status(200).json(updatePost)
    } catch (error) {
        next(error)
    }
}

