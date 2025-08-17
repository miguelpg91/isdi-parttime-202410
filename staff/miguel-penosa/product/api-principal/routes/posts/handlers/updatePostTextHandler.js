import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        const { postId } = req.params        //REQ.PARAMS : Cuando haces una solicitud a una URL como http://localhost:3000/posts/123,  123 es el valor del parámetro postId
        const { text } = req.body                    //QUE TEXTO DEL POST ES?

        logic.updatePostText(userId, postId, text)
            .then(() => res.status(204).send)
            .catch(error => next(error))

    } catch (error) {        //porque pasamos (errorr)?
        next(error)
    }
}


