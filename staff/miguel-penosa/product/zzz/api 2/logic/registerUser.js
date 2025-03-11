import validate from "./helper/validate.js"
import db from "../data/db.js"
import uuid from "../data/uuid.js"

const registerUser = (name, username, email, password) => {
    validate.name(name)         ///Llama a la función 'validate.name' para verificar
    validate.username(username)
    validate.email(email)
    validate.password(password)

    const { users } = db    ///extraer la propiedad users de un objeto db

    const found = users.some(user => user.email === email || user.username === username)

    if (found)
        throw new Error("user already exist")

    const user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    db.users = users
}

export default registerUser