import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export toggleLikePost(req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)    //EXTRAE TOKEN

        const payload = jwt.verify(token, process.env.JWT_SECRET)// VERIFICA TOKEN Y EXTRAE SU PAYLOAD

        const { sub: userId } = payload //EXTRAE SUB DEL PAYLOAD (ID) Y LO GUARDA EN USERID

        const { postId } = req.params   //EXTRAER EL ID DEL POST DE SU URL

        logic.toggleLikePost(userId, postId)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}

//REQ.PARAMS es un objeto que contiene los valores dinámicos de la URL.

