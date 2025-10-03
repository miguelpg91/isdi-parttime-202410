import logic from "../../../logic/index.js";

// Handler sin multer
export const createPostHandler = async (req, res, next) => {
    try {
        // recibes todo del body en JSON
        const { ciudad, text, precio, tipo, userId, imagen } = req.body;

        const newPost = await logic.createPost(
            ciudad,
            text,
            Number(precio),
            imagen, // aquí es string URL
            tipo,
            userId
        );

        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

export default createPostHandler;
