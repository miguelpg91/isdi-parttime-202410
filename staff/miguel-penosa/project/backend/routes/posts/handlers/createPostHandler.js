import logic from "../../../logic/index.js";

// Handler sin multer
export const createPostHandler = async (req, res, next) => {
    try {
        /// Extrae campos del body de la request
        const userId = req.userId
        const { ciudad, text, precio, tipo, imagen } = req.body;

        const newPost = await logic.createPost(
            userId,
            {
                ciudad,
                text,
                precio: Number(precio),
                imagen,                                 // URL en texto (no archivo)
                tipo
            }
        );

        res.status(201).json(newPost);  //devulve el post creado
    } catch (error) {
        next(error);
    }
};

export default createPostHandler;


/*

imagen:

- Actualmente: URL en string en req.body

- Con multer: archivo subido → corresponde a req.file

*/