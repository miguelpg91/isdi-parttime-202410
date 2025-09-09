import { Router } from "express"
import authenticateUserHandler from "./handlers/authenticateUserHandler.js"
import registerUserHandler from "./handlers/registerUserHandler.js"
import jsonBodyParser from "../../middlewares/jsonBodyParser.js"

const router = new Router()

router.post("/", jsonBodyParser, registerUserHandler)
router.post("/auth", jsonBodyParser, authenticateUserHandler)


export default router