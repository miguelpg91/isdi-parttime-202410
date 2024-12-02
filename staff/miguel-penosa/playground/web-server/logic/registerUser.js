const validate = require("./helpers/validate")
const localStorage = require("../data/localStorage")
const uuid = require("../data/uuid")

const registerUser = (name, email, username, password) => {
    validate.name(name)             ///Llama a las funciones de validación del módulo validate
    validate.email(email)
    validate.username(username)
    validate.password(password)

    const users = JSON.parse(localStorage.users)

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

    localStorage.users = JSON.stringify(users)
}

module.exports = registerUser



///localStorage.users: "users (actualizada) dentro de localStorage
///JSON.stringify(users): "convertir el objeto users a una cadena en formato JSON