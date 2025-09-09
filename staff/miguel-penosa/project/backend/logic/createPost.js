import User from "../models/User.js"
import { validate, errors } from "../com/index.js"

const { SystemError } = errors

export default async function createPost(ciudad, text, precio, imagen, tipo, userId) {
    try {
        validate.ciudad(ciudad)             /// FALTA DECLARAR ESOS CAMPOS ESPECIFICOS EN VALIDATE.JS
        validate.text(text)
        validate.precio(precio)
        validate.imagen(imagen)
        validate.tipo(tipo)
        validate.id(userId)

        const post = await Post.create({
            ciudad,
            text,
            precio,
            imagen,
            tipo,
            user: userId    ///user: la clave que espera tu base de datos  y userId : es la variable que tienes en tu función
        })

        return post

    } catch (error) {
        throw new SystemError(error.message)
    }
}