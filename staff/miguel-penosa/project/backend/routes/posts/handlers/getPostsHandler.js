import logic from "../../../logic/index.js";

export default async function getPostsHandler(req, res, next) {
    try {

        const posts = await logic.getPosts()

        res.status(200).json(posts)     ///envía los datos finales al frontend en formato JSON.

    } catch (error) {
        next(error)
    }
}
