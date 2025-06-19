import { User } from '../data/models.js'    //Importa el modelo User de Mongoose
import { validate, errors } from 'com'

const { CredentialsError, SystemError } = errors

import bcrypt from 'bcryptjs'   //librería para encriptar contraseñas


const authenticateUser = (username, password) => {          //DEFINE FUNCION
    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new CredentialsError('wrong credentials')

            return bcrypt.compare(password, user.password)  //password" es el valor que el usuario ingresó cuando intentó iniciar sesión; "user.password" contraseña(hasheada) en la base de datos
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) throw new CredentialsError('wrong credentials')

                    return user._id.toString()
                })
        })

}

export default authenticateUser