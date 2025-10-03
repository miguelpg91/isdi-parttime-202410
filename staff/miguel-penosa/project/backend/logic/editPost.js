import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError } = errors

export default async function editPost(id, data) {
    try {
        validate.id(id)
        if (data.tipo) validate.tipo(data.tipo)
        if (data.ciudad) validate.ciudad(data.ciudad)
        if (data.precio) validate.precio(data.precio)
        if (data.text) validate.text(data.text)
        if (data.imagen) validate.imagen(data.imagen)

        const updated = await Post.findByIdAndUpdate(   //metodo predetirmado de mongoose
            id,
            { $set: data },
            { new: true }
        )

        if (!updated) throw new SystemError("Post no encontrado");

        return updated;

    } catch (error) {
        throw new SystemError(error.message)
    }
}