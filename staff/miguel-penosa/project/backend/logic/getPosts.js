import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError, NotFoundError } = errors

export default async function getPosts(userId, postId) {
    try {
        // Si me pasan postId y userId, devuelvo ese post concreto
        if (postId) {
            if (userId) validate.id(userId);
            validate.id(postId);

            const post = await Post.findOne({ _id: postId, user: userId });

            if (!post) throw new NotFoundError("Post no encontrado o no eres dueño");

            return post;
        }

        // Si no me pasan postId, devuelvo todos los posts
        return await Post.find();
    } catch (error) {
        throw new SystemError(error.message)
    }
}