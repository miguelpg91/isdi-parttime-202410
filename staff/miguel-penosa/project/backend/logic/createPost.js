import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError } = errors



export default async function createPost(userId, data) {
    try {
        const { ciudad, text, precio, imagen, tipo } = data
        const numericPrecio = Number(precio)    ///cuando los datos vienen de un req.body todo es string asi que lo convertimos a un NUMBER

        validate.ciudad(ciudad)     //Acceder al método ciudad del objeto validate y ejecutarlo pasando la variable (ciudad)
        validate.text(text)
        validate.precio(numericPrecio)
        validate.imagen(imagen)
        validate.tipo(tipo)
        validate.id(userId)

        const post = await Post.create({    ///// post._id  : El id del post lo genera MongoDB al guardar el documento
            ciudad,
            text,
            precio: numericPrecio,
            imagen,
            tipo,
            author: userId    ///user: la clave que espera tu base de datos  y userId : es la variable que tienes en tu función
        })

        return post

    } catch (error) {
        throw new SystemError(error.message)
    }
}



///