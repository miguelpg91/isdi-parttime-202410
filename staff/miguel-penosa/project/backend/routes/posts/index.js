import { Router } from "express"
import jsonBodyParser from "../../middlewares/jsonBodyParser.js"
import createPostHandler from "./handlers/createPostHandler.js"

const router = new Router()

router.post("/", jsonBodyParser, createPostHandler)


export default router