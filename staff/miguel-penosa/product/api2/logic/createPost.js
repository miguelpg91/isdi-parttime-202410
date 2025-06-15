import { User, Post } from "../data/models.js"
import { validate, errors } from "com"

const { SystemError, NotFoundError } = errors

const createPost = (userId, image, text) => {
    validate.userId(userId, "userId")
    validate.image(image)
    validate.text(text)

    return User.findById(userId)                                        //Busca un usuario en la base de datos usando su ID
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {                                                 //recibe el usuario.
            if (!user) throw new NotFoundError("user not found")

            const post = new Post({ author: user._id, image, text })    // Si el usuario existe, se crea un nuevo post 

            return post.save()                                          //guarda el post y lo pasa al siguiente paso
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => { })          //recibe ese post guardado
}

export default createPost


/*RETURN significa:

"Devuelve una PROMESA que representa todo el proceso de buscar al usuario, crear el post y guardarlo (está accediendo a una base de datos externa (MongoDB).
Eso no ocurre al instante. Tarda unos milisegundos en completarse)

Cuando termines de buscar el usuario, entonces haz esto...

.then significa:
👉 “Cuando esto termine bien, haz esto otro”

.catch significa:
👉 “Si algo va mal, haz esto otro”.

-userId : Para buscar el usuario

-user._id : Para guardar quién hizo el post

*/