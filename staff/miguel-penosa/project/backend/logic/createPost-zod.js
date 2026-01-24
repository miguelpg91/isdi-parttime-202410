import Post from "../models/Post.js";
import { postSchema } from "../com/validate.js";
import { errors } from "../com/index.js";

const { ValidationError } = errors;

export default async function createPost(userId, data) {
    const numericPrecio = Number(data.precio);  ///data.precio llega como string porque viene de req.body asi que lo conviertes a Número para que pueda ser validado por zod


    const postData = {
        ...data,
        precio: numericPrecio
    };

    // Validación Zod
    try {
        postSchema.parse(postData);
    } catch (err) {
        if (err.name === "ZodError") {      ///error nativo de zod???
            throw new ValidationError(      ///Traduces un error de Zod al idioma de tu app
                err.errors.map(e => e.message).join(", ")   ///unificamos todos los mensajes de zod nativos de error en una linea? 
            );
        }
        throw err;
    }

    // Validar userId
    if (typeof userId !== "string" || userId.length < 10) {     ///porque validamos id suelto y no en validate zod? 
        throw new ValidationError("userId inválido");           /// pero en el validate no mencionamos nada de validationerrror cierto?
    }

    const post = await Post.create({
        ...postData,
        author: userId      /// se pone porque en la db de post userid es author? 
    });

    return post;
}