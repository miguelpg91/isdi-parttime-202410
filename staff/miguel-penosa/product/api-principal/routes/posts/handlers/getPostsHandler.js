import logic from '../../../logic/getPosts.js'
import jwt from 'jsonwebtoken'                  //librería jsonwebtoken, que permite verificar y decodificar tokens JWT

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)       //Verifica y decodifica el token usando tu clave secreta

        const { sub: userId } = payload  // Extrae el campo sub (subject) del payload y lo renombra como userId

        logic.getPosts(userId)
            .then(posts => res.json(posts))     //Si la promesa se resuelve correctamente, devuelve los posts en formato JSON al cliente
            .catch(error => next(error))        //Si ocurre un error asíncrono (????), se pasa ese error a next(error), que es el manejador de errores de Express.
    } catch (error) {                       //Captura errores inmediatos o sincronizados
        next(error)
    }
}


/*

El token se guarda en el navegador tras hacer login.

El frontend lo manda en los headers, como:
Authorization: Bearer <token>

El backend lee el token, lo verifica con la clave secreta (JWT_SECRET).

Extrae el payload, donde viene info útil como el userId.

*/