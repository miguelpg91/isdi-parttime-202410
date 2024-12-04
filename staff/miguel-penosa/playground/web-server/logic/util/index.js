const authenticateUser = require('./authenticateUser')
const getUserName = require('./getUserName')
const registerUser = require('./registerUser')             ///Agrupa funciones relacionadas con la autenticación y la gestión de usuarios



const logic = {
    authenticateUser,
    getUserName,
    registerUser
}

module.exports = logic              ///estas funciones para que puedan ser usadas en otras partes de la aplicación.