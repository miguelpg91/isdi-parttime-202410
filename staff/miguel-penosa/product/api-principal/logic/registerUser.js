import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { DuplicityError, SystemError } = errors

import bcrypt from 'bcryptjs'

const registerUser = (name, email, username, password) => {
    validate.name(name)
    validate.email(name)
    validate.username(username)
    validate.password(password)

    return bcrypt.hash(password, 10)                                //QUE HACE AQUI?
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {                                                      //QUE ES HASH ???
            return User.create({ name, email, username, password: hash })
                .catch(error => {
                    if (error.code === 11000)
                        throw new DuplicityError('user already exists')

                    throw new SystemError(error.message)                        //PORQUE ESE THROW  Y PORQUE A ESA ALTURA ?
                })
        })
        .then(user => { })
}

export default registerUser