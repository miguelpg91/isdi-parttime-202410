import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)    //Lee el header HTTP y corta los 7 primeros caractéres

        const payload = jwt.verify(token, process.env.JWT_SECRET)    //Comprueba que el token es válido y desencripta

        const { sub: userId } = payload     //Extrae el campo sub del payload, que contiene el ID del usuario.

        const { postId } = req.params       //Extrae el postId desde la URL de la ruta.

        logic.toggleLikePost(userId, postId)
            .then(() => res.status(204).send)   //
            .catch(error => next(error))
    } catch (error) {
        next(error)         //pasa el error al siguiente middleware que sepa manejar errores, que debe estar definido en tu app
    }
}

/*

jwt.verify() -->     es una función de la librería jsonwebtoken.  -->   Desencripta y valida un token JWT

process.env.JWT_SECRET --> Contiene una clave secreta   -->   Sirve para comprobar que el token no ha sido modificado por nadie

*/

/*

Lee el header Authorization, que llega así: "Bearer eyJh..." y Corta los primeros 7 caracteres(Bearer)

payload = { sub: 'user123', iat: ..., exp: ... }

Extrae el campo sub del payload, que contiene el ID del usuario.

Extrae el postId desde la URL de la ruta.   PUT /posts/abc123/like  ---> 

*/