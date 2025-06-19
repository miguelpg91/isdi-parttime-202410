import { User } from '../data/models.js'    // Importa el modelo User de Mongoose, que permite consultar usuarios en MongoDB.
import { validate, errors } from 'com'      // Importa funciones para validar datos y errores personalizados 

const { SystemError, NotFoundError } = errors   //Extrae dos tipos de errores personalizados del objeto errors

const getUsername = userId => {     // Define una funcion que recibe un userId (el _id del usuario en MongoDB)
    validate.id(userId, 'userId')   // Valida que userId sea válido. Si no lo es, lanza un error con el mensaje "userId"

    return User.findById(userId)    //Busca un usuario por su ID usando User.findById. Esto devuelve una promesa.
        .catch(error => { throw new SystemError(error.message) })       // Si ocurre un error al buscar, lo atrapa y lanza un SystemError con el mensaje del error original
        .then(user => {                                                 // Si la búsqueda fue bien,  recibe el resultado
            if (!user) throw new NotFoundError('user not found')        // Si no se encontró ningún usuario con ese ID lanza el mensaje

            return user.name                                            // Si va bien, devuelve el user.name
        })
}

export default getUsername

//esta función valida un ID, busca el usuario en la base, maneja errores, y devuelve el nombre del usuario.

/* Valida que el userId tenga un formato correcto.

Busca al usuario en MongoDB usando User.findById().

Si hay error en la base de datos → lanza SystemError.

Si no encuentra al usuario → lanza NotFoundError.

Si lo encuentra → devuelve su nombre (user.name). */

/*validate.id(userId, 'userId') valida el valor de userId y lanza un error si no cumple con los requisitos.
 El segundo argumento ('userId') es solo para mostrar un nombre de campo más claro en los mensajes de error. */

