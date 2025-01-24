import validate from "./helper/validate.js"     //Importa validate para comprobar que los datos (username y password) cumplen los requisitos

import db from "../data/db.js"      //Busca en la base de datos (simulada en db.js) un usuario con las credenciales correctas.

const authenticateUser = (username, password) => {
    validate.username(username)                         ////Se invoca el método username y password del módulo validate
    validate.password(password)

    const { users } = db        ///desestructuramos el objeto db para obtener la lista de usuarios

    const user = users.find(user => user.username === username && user.password === password)   /// Se utiliza el método find para buscar un usuario específico dentro del array users

    if (!user)      ///si user es undefined
        throw new Error("wrong credentials")

    return user.id      //la función devuelve el id del usuario
}

export default authenticateUser