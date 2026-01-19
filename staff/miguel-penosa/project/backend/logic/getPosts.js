import Post from "../models/Post.js"
import { validate, errors } from "../com/index.js"

const { SystemError, NotFoundError } = errors

export default async function getPosts(userId, postId) {
    try {
        if (postId) {                           ///  Hay postId → quiere UN post concreto
            if (userId) validate.id(userId);    //  Comprueba que userId tiene forma de id válida
            validate.id(postId);                //  Comprueba que postId tiene forma de id válida

            const post = await Post.findOne({ _id: postId, user: userId });     //Busca un post cuyo _id sea postId y que pertenezca a userId

            if (!post) throw new NotFoundError("Post no encontrado o no eres dueño");

            return post;
        }

        return await Post.find();               /// No hay postId → quiere TODOS los posts
    } catch (error) {
        throw new SystemError(error.message)
    }
}


/*



Contexto de getPosts en FRONTEND: 

- Pantalla inicial (sin login) → lista de posts → No se pasa postId (if (postId)) → Post.find

- Haces click en un post → Detalles del post →  Ahí sí tienes postId → Post.findOne




*/