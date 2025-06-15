import { User, Post } from "../data/models.js"
import { validate, errors } from "com"

const { SystemError, NotFoundError, OwnershipError } = errors

const updatePostText = (userId, postId, text) => {
    validate.id(userId, "userId")
    validate.id(postId, "postId")
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {                                                     //Cuando termine la promesa anterior y me dé un user, haz esto...
            if (!user) throw new NotFoundError("user not found")            // Si el user no existe, lanza un NotFoundError

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })

        })
        .then(post => {                                                     //Cuando termine la promesa anterior y me dé un post, haz esto...
            if (!post) throw new NotFoundError("post not found")            // Si el post  no existe, lanza un NotFoundError

            if (post.author.toString() !== userId) throw new OwnershipError("user is not author of post.message")   //BELOW

            post.text = text    //Actualiza el texto del post

            return post.save()                                              //Guarda los cambios.
                .catch(error => { throw new SystemError(error.message) })   // Si algo falla, lanza un SystemError
        })
        .then(result => { })

}

export default updatePostText

/*

En MongoDB, los campos como _id o author no son textos, sino objetos especiales llamados ObjectId
No puedes comparar un ObjectId con un string directamente
Convertir post.author a string con .toString()


el ID del post y el ID del user no coinciden

pero el id del user y el post author sí coinciden


*/