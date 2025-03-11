import validate from "./helper/validate.js"     //Importa validate para comprobar que los datos (username y password) cumplen los requisitos

import db from "../data/db.js"      //Busca en la base de datos (simulada en db.js) un usuario con las credenciales correctas.

const authenticateUser = (username, password) => {
    validate.username(username)                         ////Se invoca el método username y password del módulo validate
    validate.password(password)

    const { users } = db        ///Extrae la propiedad users del objeto db y la guarda en una variable llamada users.

    const user = users.find(user => user.username === username && user.password === password)   /// Se utiliza el método find para buscar un usuario específico dentro del array users

    if (!user)      ///si user es undefined
        throw new Error("wrong credentials")

    return user.id      //la función devuelve el id del usuario
}

export default authenticateUser



/// LINEA 11: Busca en el array users un usuario cuyo username sea igual a username y cuyo password sea igual a password. Si lo encuentra, lo asigna a user

///Si encuentra un usuario que cumpla con ambas condiciones, lo asigna a user

/// LINEA 11 función CALLBACK es una función que se pasa como argumento a otra función, y se ejecuta dentro de esa función= user => user.username === username && user.password === password

//user.username: Viene del array de usuarios (la base de datos).
//username: Viene del input que la función recibe como argumento.