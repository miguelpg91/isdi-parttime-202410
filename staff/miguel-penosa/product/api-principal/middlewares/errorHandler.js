import { errors } from 'com'

const { ValidationError, SystemError, DuplicityError, CredentialsError, NotFoundError, OwnershipError } = errors

export default (error, req, res, next) => {
    if (error instanceof NotFoundError)             ///Comprueba si el objeto error fue creado con la clase NotFoundError
        res.status(404).json({ error: error.constructor.name, message: error.message })         /// res.status(404) → Devuelve un error HTTP 404 (Not Found).
    else if (error instanceof OwnershipError)                                                   /// .json({...}) → Responde al cliente con un objeto JSON
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


/// ERRROR CONSTRUCTOR NAME QUE ES ????? Y PORQUE EN ({})


/*

new crea el error con el tipo que tú elegiste (la clase que usaste).

La lógica que decide qué error crear la escribes tú en el código (por ejemplo, en el if (!user) throw new NotFoundError()).

No hay reglas “automáticas” dentro del error; las reglas están en tu código que lanza el error.




-   error instanceof NotFoundError -----> instanceof : Este ERROR que me ha llegado es del tipo NOTFOUNDERROR ? 

//

-   if (!user) throw new NotFoundError('user not found')        ----->  Estás creando un error personalizado

-   Y lo lanzas (throw) al sistema.

-  Se envía automáticamente por detrás cuando lanzas el error (throw) hasta el middleware de errores ---->   (error, req, res, next) => { ... }



*/