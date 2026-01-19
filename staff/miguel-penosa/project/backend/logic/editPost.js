import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError, OwnershipError } = errors

export default async function editPost(postId, userId, data) {  //en handler: id, userId, data= tipo, ciudad,... ; Reconoce los valores porque respeta el mismo orden que los argumentos en await logic.editPost 
    try {
        validate.id(postId)
        validate.id(userId)
        ///Valida que el id exista y tenga formato válido de ObjectId
        if (data.tipo) validate.tipo(data.tipo)             /// //validate.tipo → del documento validate ; data.tipo → del cuerpo de la solicitud (req.body)
        if (data.ciudad) validate.ciudad(data.ciudad)       /// Si el objeto data contiene la propiedad tipo, haz la validación de su valor
        if (data.precio) validate.precio(data.precio)
        if (data.text) validate.text(data.text)             //  Si data tiene propiedad text, llama al validate pasando ese valor de la porpiedad
        if (data.imagen) validate.imagen(data.imagen)

        const updated = await Post.findOne({ _id: postId, user: userId })   ///busca un post cuyo _id de Mongo sea igual a postId
        if (!updated) throw new OwnershipError("No es tu post")

        // 🔹 Actualizar solo los campos que vienen en data
        Object.assign(updated, data)    // Al post encontrado actualiza solo los campos que vienen en data(HANDLER)
        await updated.save()    //Guarda los cambios

        return updated;

    } catch (error) {
        throw new SystemError(error.message)
    }
}


/*

- id = Es el _id del post en MongoDB (viene de req.params)

- data = objeto con los campos a modificar (viene de req.body)

{
  precio: 35,
  ciudad: "Valencia"
}

- ObjectId = _id del post concreto. Va en la url de la solicitud: 

PUT /posts/65fa1c9e2f4a9c0012ab3e91


*/