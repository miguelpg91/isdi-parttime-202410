import { User, Post } from "../data/models.js"
import { validate, errors } from "com"

const { SystemError, NotFoundError } = errors

const toggleLikePost = (postId, userId) => {
    validate.id(userId, "userId")
    validate.id(postId, "postId")

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError("User not found")

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => {
            if (!post) throw new NotFoundError("Post not found")

            const { likes } = post          // Extrae la lista de likes del post (es un array de IDs de usuarios que dieron like)

            const index = likes.findIndex(userObjectId => userObjectId.toString() === userId)   //BELOW

            if (index < 0)
                likes.push(userId)          //Añade like del usuario
            else
                likes.splice(index, 1)      //Quita el like del usuario

            return post.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default toggleLikePost

/*

-----TOGGLELIKEPOST significa:
Si ya has dado like, lo quita.
Si no has dado like, lo añade.

-----const index = likes.findIndex(userObjectId => userObjectId.toString() === userId)

 Busca si el usuario ya está en la lista de likes:  "El campo likes es un array dentro de Post con los IDs de los usuarios."

index < 0       Esto significa: "si el usuario NO está en la lista de likes lo añado con PUSH"

index >= 0      Esto significa: "si el usuario YA está en la lista de likes", entonces se quita el like con SPLICE"


*/



/*

Ejemplo:

const arr = ['a', 'b', 'c', 'd']

arr.splice(1, 1)
// Empieza en posición 1 (la "b") y elimina 1 elemento

console.log(arr) //  ['a', 'c', 'd']

*/