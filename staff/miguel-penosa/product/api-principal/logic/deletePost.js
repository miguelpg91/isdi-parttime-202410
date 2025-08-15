import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

const deletePost = (userId, postId) => {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })     // No es una destructuración, acceder a la propiedad message del objeto error(Objeto que se crea automaticamente )
        .then(user => {
            if (!user) throw new NotFoundError('user not found')            //callback : Se ejecuta si Post.findById(postId) tuvo éxito.

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => {                                                     //callback : Se ejecuta si Post.findById(postId) tuvo éxito.
            if (!post) throw new NotFoundError('post not found')

            if (post.author.toString() !== userId) throw new OwnershipError('user is not author of post')       //	Convierte el ObjectId a texto (string), para poder comparar si el ID del autor es diferente del ID del usuario actual

            return Post.deleteOne({ _id: post._id })    //Borra el post cuyo _id sea igual al _id de este objeto post
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })            ///????
}

export default deletePost