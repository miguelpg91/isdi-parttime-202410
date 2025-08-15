import bcrypt from 'bcryptjs'
import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { CredentialsError, SystemError } = errors

const authenticateUser = (username, password) => {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new CredentialsError('wrong credentials')

            return bcrypt.compare(password, user.password)                  ///QUE OCURRE A PARTIR DE AQUI?''///PORQUE RETURN DESPUES DE IF, ESTÁ CIONECTADO?
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) throw new CredentialsError('wrong credentials')

                    return user._id.toString()
                })
        })
}

export default authenticateUser