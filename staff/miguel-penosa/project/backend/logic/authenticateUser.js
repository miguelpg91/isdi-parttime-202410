import User from "../models/User.js"
import { validate, errors } from "../com/index.js"
import bcrypt from "bcrypt"

const { SystemError, CredentialsError } = errors

export default async function authenticateUser(email, password) {
    try {
        validate.email(email)
        validate.password(password)

        const user = await User.findOne({ email })
        if (!user) throw new CredentialsError("Usuario no encontrado")

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) throw new CredentialsError("Contraseña no coincide")

        return user


    } catch (error) {
        throw new SystemError(error.message)
    }
}

/*
password → lo que escribe el usuario al hacer login.

user.password → el hash guardado en tu base de datos cuando se registró.


*/






/* 


export default async function authenticateUser(identifier, password) {
    const user = await User.findOne({
        $or: [{ email: identifier }, { username: identifier }]      //  identifier puede ser email o username
    })
    if (!user) throw new Error("Usuario no encontrado")

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error("Contraseña incorrecta")

    return user._id.toString()
}


*/