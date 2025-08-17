import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const getPosts = userId => {
    validate.id(usserId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {         // Es un callback porque se pasa como argumento a un then ( promesa )
            if (!user) throw new NotFoundError('USER NOT FOUND')

            return Post.find().populate('author', 'username').sort('-date').lean()       //???
                .catch(error => { throw new SystemError(error.message) })   //Los throw new ErrorTipo(...) hacen que Express busca un middleware de errores y lo atrapa
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()               ////    Conviertes esto: _id: ObjectId("abc123") en esto ---> id: "abc123"
                        delete post._id         ///Borra el campo _id original porque ya tenemos su version limpia id

                        delete post.__v         //Borra el campo de (versión) interna de MongoDB    

                        if (post.author._id) {                          //MongoDB por defecto guarda el ID en un campo llamado _id
                            post.author.id = post.author._id.toString()
                            delete post.author._id                              //Borra el campo _id original porque ya tenemos su version limpia id
                        }

                        post.own = userId === post.author.id

                        post.liked = post.likes.some(userObjectId => userObjectId.toString() === userId)
                        post.likes = post.likes.length
                    })

                    return posts
                })
        })
}

export default getPosts





/*


-   LEAN : Convierte los documentos Mongoose a objetos planos de JavaScript.

-   post.__v  ----> Borra el campo de versión interna de MongoDB (__v), que no te interesa mostrar al usuario.

-   ObjectId ---->   Mongo lo crea automáticamente al guardar un documento. No es un string, sino un objeto especial


*/