import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) = {
    try{
        const token = req.headers.authorization.slice(7)    //Extrae el token del header Authorization, .slice(7): elimina "Bearer " para quedarte solo con el token.

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload     //Estás asignando el valor de sub a una nueva variable llamada userId. PAYLOAD es un objeto

        logic.getPosts(userId)
            .then(posts => res.json(posts)) // Si getPosts resuelve bien responde al cliente con los posts en formato JSON
            .catch(error => next(error))    // Si falla lo manda al middleware de errores con next(error)
    } catch(error) {
        next(error)
    }
}


/*

-Un token JWT tiene 3 partes separadas por puntos:

HEADER.PAYLOAD.SIGNATURE

    HEADER: tipo de token y algoritmo.

    PAYLOAD: los datos (como el ID del usuario).

    SIGNATURE: asegura que no se ha modificado.

PAYLOAD:

{
  "sub": "u123456",
  "name": "Migue",
  "iat": 1718650000
}
sub: el ID del usuario  

iat: fecha en la que se creó el token (issued at)


- Token: Es el paquete completo. Contiene 3 partes: header.payload.signature

- Payload: Es solo la parte central del token. Contiene los datos útiles del usuario (como su ID, nombre, etc). Con jwt.verify(), extraes el payload.


*/
