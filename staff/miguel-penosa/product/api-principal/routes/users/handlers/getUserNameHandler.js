import logic from '../../../logic/getUserName'
import jwt from 'jswonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const { sub: userId } = payload

        logic.getUserName(userId)
            .then(name => res.json(name))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}