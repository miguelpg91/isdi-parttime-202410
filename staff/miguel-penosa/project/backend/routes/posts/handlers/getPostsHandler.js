import logic from "../../../logic/index.js";

export default async function getPostsHandler(req, res, next) {
    try {
        const { userId } = req

        const posts = await logic.getPosts()

        res.status(200).json(posts)

    } catch (error) {
        next(error)
    }
}
