const loginUser = require("./loginUser")                ///Agrupa funciones relacionadas con la autenticación y la gestión de usuarios
const isUserLoggedIn = require("./isUserLoggedIn")
const getUserName = require("./getUserName")
const logoutUser = require("./logoutUser")
const registerUser = require("./register")

const logic = {
    loginUser,
    isUserLoggedIn,
    getUserName,
    logoutUser,
    registerUser
}

module.exports = logic              ///estas funciones para que puedan ser usadas en otras partes de la aplicación.