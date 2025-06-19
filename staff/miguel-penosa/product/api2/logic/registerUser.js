import { User } from '../data/models.js'    // Importa el modelo de usuario de Mongoose
import { validate, errors } from 'com'      // Importa funciones para validar los datos y clases de errores personalizados

const { DuplicityError, SystemError } = errors  //Extrae dos tipos de errores personalizados

import bcrypt from 'bcryptjs'   //librería para encriptar contraseñas

const registerUser = (name, email, username, password) => {     //DEFINE FUNCION
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return bcrypt.hash(password, 10)    //Version encriptada de contraseña
        .catch(error => { throw new SystemError(error.message) })   //Si falla el encriptado, lanza un error del sistema
        .catch(hash => {    //Si va bien, la recibe 
            return Usercreate({ name, email, username, password: hash })    //Guarda nuevo usuario en MongoDB, con el hash como contraseña  
                .catch(error => {       //Si falla al guardar usuario
                    if (error.code === 11000)   //Si es error 11000 signfica que hay algo duplicado
                        throw new DuplicityError('user already exists') //lanza error personalizado (error de duplicado)

                    throw new SystemError(error.message)    //Si el error no es por duplicado, lanza error de sistema
                })
        })
        .then(user => { })      //Si salió bien, lo recibe
}

export default registerUser