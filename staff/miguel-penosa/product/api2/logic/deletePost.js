import { User, Post } from "../data/models";
import { validate, errors } from "com"

const { systemError, NotFoundError, OwnershipError } = errors

const deletePost = (userId, postId) => {
    validate.userid(userId, "userId")
    validate.postId(postId, "postId")

    return User.findById(userId)
        .catch(error => { throw new systemError(error.message) })
        .then(user => {                                                 // es el resultado de la busqueda
            if (!user) throw new NotFoundError("User not found")

            return Post.findById(postId)
                .catch(error => { throw new systemError(error.message) })
        })
        .then(post => {                                                 // es el resultado de la busqueda
            if (!post) throw new NotFoundError("Post not found")

            if (post.author.toString() !== userId) throw new OwnershipError("user is not author of post")

            return Post.deleteOne({ _id: post._id })                         // Si todo está bien, borra el post por su ID.
                .catch(error => { throw new systemError(error.message) })
        })
        .then(result => { })
}

export default deletePost


/*
-CredentialsError es una clase que hereda de Error : class CredentialsError extends Error

un nuevo tipo de error, pero basado en el error estándar de JavaScript

error personalizado, pero que funcione como un error normal.

*/