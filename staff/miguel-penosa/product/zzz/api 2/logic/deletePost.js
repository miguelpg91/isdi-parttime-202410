import validate from "./helper/validate.js"

import db from "../data/db.js"

const deletePost = (userId, postId) => {
    validate.id(userId, "userId")
    validate.id(postId, "postId")

    const { users, posts } = db

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error("users not found")

    const index = posts.findIndex(post => post.id === postId)   //Busca en la lista de publicaciones el índice de la publicación cuyo id coincida con postId

    if (index < 0) throw new Error("posts not found")

    posts.splice(index, 1)  //Elimina una publicación de la lista posts usando su índice (index): 1 elemento

    db.posts = posts    //Asigna la lista actualizada de publicaciones de vuelta a la propiedad posts del objeto db.
}

export default deletePost


/*

LINEA 9: Aquí se usa desestructuración para extraer las propiedades users y posts del objeto db.
Ahora, users representa la lista de usuarios, y posts es la lista de publicaciones.

*/