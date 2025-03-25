import validate from "./helper/validate.js"

import db from "../data/db.js"
import uuid from "../data/uuid.js"

const createPost = (userId, image, text) => {   //Cuando se invoque esta función, se pasará la información necesaria (como userId, image, y text), y la función se encargará de validar, crear y almacenar el post.
    validate.id(userId, "userId")
    validate.image(image)
    validate.text(text)


    const { users, posts } = db // destructuramos las propiedades del array validate //= db en lugar de escribir db.users o db.posts

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error("user not found")


    const post = {  //Cuando se llama a createPost(userId, image, text), esos valores se envian a la función y son usados para crear el objeto post con:
        id: uuid()
        author: userId,
        image,
        text,
        date: new Date().toISOString()
    }

    posts.push(post)

    db.posts = posts    //Se actualiza la base de datos guardando la lista de posts modificada
}

export default createPost