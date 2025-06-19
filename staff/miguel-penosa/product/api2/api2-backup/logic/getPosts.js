import { User, Post } from "../data/models.js"
import { validate, errors } from "com"

const { SystemError, } = errors

const getPosts = userId => {
    validate.id(userId, "userId")

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError("user not found")

            return Post.find().populate("author, username").sort("-date").lean()       // BELOW
                .catch(error => { throw new SystemError(error.message) })
                .then(posts => {                                                        //Empieza a trabajar con los posts encontrados
                    posts.forEach(post => {                            //Recorre todos los posts para modificarlos uno a uno antes de devolverlos.
                        post.id = post._id.toString()                  //Convierte _id a id (más amigable para frontend)
                        delete post._id                                //borra el campo _id

                        delete post.__v                                 // // Borra la propiedad __v, que Mongo usa para versiones

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()     //convierte _id a id dentro del autor del post
                            delete post.author._id
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

/*  POPULATE: Trae info completa del autor del post
  SORT: Ordena los posts poniendo primero los más nuevos
  LEAN: Convierte los datos de Mongoose en objetos JavaScript simples, mas ligeros. Solo vas a leer y mostrar datos(no modificar) */