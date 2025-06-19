import logic from '../../../logic/index.js';
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = req.params

        logic.deletePost(userId, postId)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}

/*








- FUNCIONALIDAD

Obtiene y verifica un token JWT (para asegurar que el usuario está autenticado).

Extrae el userId del token.

Extrae el postId de la URL de la solicitud.

Elimina el post con ese postId usando la lógica de negocio (logic.deletePost).

Si todo va bien, responde con un código 204 (sin contenido).

Si algo falla, pasa el error al siguiente middleware de manejo de errores.

*/