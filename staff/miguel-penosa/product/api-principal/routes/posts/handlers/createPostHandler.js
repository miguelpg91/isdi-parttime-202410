import logic from '/../../../logic/index.js'
import jwt from '/../../../middlewares/jsonBodyParser.js'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)       //porque 2 argumentos

        const { sub: userId } = payload     //que está haciendo aquí

        const { image, text } = req.body

        logic.createPost(userId, image, text)
            .then(() => res.status(201).send)
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}