import { errors } from '../com/index.js'

const {
    ValidationError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    OwnershipError,
} = errors

const errorHandler = (error, req, res, next) => {
    // 🔹 añade un console.error para ver el error completo en consola
    console.error(' ERROR:', error)

    if (error instanceof NotFoundError)
        res.status(404).json({ error: error.constructor.name, message: error.message })     ///instance?? error.constructor.name??
    else if (error instanceof OwnershipError)
        res.status(403).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof CredentialsError)
        res.status(401).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof DuplicityError)
        res.status(409).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof ValidationError)
        res.status(400).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof SystemError)
        res.status(500).json({ error: error.constructor.name, message: error.message })
    else
        res.status(500).json({ error: SystemError.name, message: error.message })
}

export default errorHandler


//Todo error que no conozco → lo considero SystemError

/*

En createPost NO hay ninguna línea que lance explícitamente un SystemError

        Si Mongo / Mongoose falla (DB caída, schema error, etc.):

        - Post.create() lanza un error nativo (Error)

        - Ese error no se captura aquí

        - Sale de createPost

        - Llega al handler

        - El handler hace next(error)

        - El errorHandler lo recibe

        - No es ValidationError

        - Entra en el else

        - Se responde como SystemError (500)

        

*/