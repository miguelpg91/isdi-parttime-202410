import User from "../models/User.js"
import { validate, errors } from "../com/index.js";         /// ??
import bcrypt from "bcrypt"

const { SystemError, DuplicityError } = errors

export default async function registerUser(name, email, username, password) {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    try {
        const hash = await bcrypt.hash(password, 10)
        try {
            const user = await User.create({ name, email, username, password: hash })
            return user
        } catch (error) {
            if (error.code === 11000)
                throw new DuplicityError("Usuario ya existe")
            throw new SystemError(error.message)
        }
    } catch (error) {
        throw new SystemError(error.message)
    }
}



/*

import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { DuplicityError, SystemError } = errors

import bcrypt from 'bcryptjs'

const registerUser = (name, email, username, password) => {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ name, email, username, password: hash })
                .catch(error => {
                    if (error.code === 11000)
                        throw new DuplicityError('user already exists')

                    throw new SystemError(error.message)
                })
        })
        .then(user => { })
}

export default registerUser



*/