import logic from "../../../logic/index.js"
import jwt from "jsonwebtoken"

export default async function registerUserHandler(req, res, next) {
    try {
        const { email, password } = req.body
        const userId = await logic.registerUser(username, email, password)
        const payload = { sub: userId }
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        res.json({ token })

    } catch (error) {
        next(error)
    }
}