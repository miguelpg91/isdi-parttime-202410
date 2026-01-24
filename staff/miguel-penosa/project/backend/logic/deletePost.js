import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { NotFoundError } = errors

export default async function deletePost(postId, userId) {
    validate.id(postId)
    validate.id(userId)

    const deleted = await Post.findOneAndDelete({
        _id: postId,
        author: userId
    })

    if (!deleted) {
        throw new NotFoundError("Post no encontrado o no eres el dueño")
    }
};

///_id porque MongoDB nombra así su campo identificador por defecto










/* VERSION CORRECTA: Para que el error geenerico de catch no pise siempre al errror especifico NotfoundError


import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { NotFoundError } = errors

export default async function deletePost(postId, userId) {
    validate.id(postId)
    validate.id(userId)

    const deleted = await Post.findOneAndDelete({
        _id: postId,
        author: userId
    })

    if (!deleted) {
        throw new NotFoundError("Post no encontrado o no eres el dueño")
    }
};


VESRION ANTIGUA: 

import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError, NotFoundError } = errors

export default async function deletePost(postId, userId) {
    try {
        validate.id(postId)     //propiedad de validate(argumento)
        validate.id(userId)

        const deleted = await Post.findOneAndDelete({ _id: postId, author: userId })  ///Trae el documento donde _id sea postId y user sea userId

        if (!deleted) throw new NotFoundError('Post no encontrado o no eres el dueño')
    } catch (error) {
        throw new SystemError(error.message)
    }

}




*/