import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError } = errors



export default async function createPost(ciudad, text, precio, imagen, tipo, userId) {
    try {
        const numericPrecio = Number(precio)    ///cuando los datos vienen de un req.body todo es string asi que lo convertimos a un NUMBER

        validate.ciudad(ciudad)
        validate.text(text)
        validate.precio(numericPrecio)
        validate.imagen(imagen)
        validate.tipo(tipo)
        validate.id(userId)

        const post = await Post.create({
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