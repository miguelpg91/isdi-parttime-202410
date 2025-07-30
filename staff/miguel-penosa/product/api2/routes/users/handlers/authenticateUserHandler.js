import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {                                           // Manejamos errores síncronos
        const { username, password } = req.body     // Si req.body no existe, esto lanza un error → que sería capturado por el try/catch

        logic.authenticateUser(username, password)
            .then(userId => {                       //Se ejecuta solo si la promesa se resuelve correctamente
                const payload = { sub: userId }

                const token = jwt.sign(payload, process.env.JWT_SECRET)

                res.json(token)
            })
            catch (error => next(error))    //next para que Express lo mande al middleware de errores.
    } catch (error)
        next(error)
}