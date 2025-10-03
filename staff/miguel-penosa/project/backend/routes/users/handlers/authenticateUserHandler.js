import logic from "../../../logic/index.js"
import jwt from "jsonwebtoken"

export default async function authenticateUserHandler(req, res, next) {
    try {
        const { email, password } = req.body

        const user = await logic.authenticateUser(email, password)
        const payload = { sub: user._id }
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        res.json({ token })
    } catch (error) {
        next(error)
    }
}