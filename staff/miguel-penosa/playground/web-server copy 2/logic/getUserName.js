const localStorage = require("../data/localStorage")       ///IMPORTAMOS CON REQUIRE
const sessionStorage = require("../data/sessionStorage")

const getUserName = () => {
    const users = JSON.parse(localStorage.users)    ///Convierte esa cadena en un arreglo de objetos usando JSON.parse///LOCALSTORAGE para guardar a todos los usuarios (ya que quieres que esos datos persistan incluso después de cerrar el navegador

    const user = users.find(user => user.id === sessionStorage.userId)      ///SESSIONSTORAGE para guardar el userId (ya que es información que solo se necesita mientras la pestaña esté abierta)

    if (!user) throw new Error('user not found')

    return user.name
}

module.exports = getUserName