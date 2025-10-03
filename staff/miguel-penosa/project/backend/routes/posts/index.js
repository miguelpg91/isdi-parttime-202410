import { json, Router } from "express"
import jsonBodyParser from "../../middlewares/jsonBodyParser.js"
import authMiddleware from "../../middlewares/authMiddleware.js"
import createPostHandler from "./handlers/createPostHandler.js"
import deletePostHandler from "./handlers/deletePostHandler.js"
import getPostsHandler from "./handlers/getPostsHandler.js"
import searchPostHandler from "./handlers/searchPostHandler.js"
import editPostHandler from "./handlers/editPostHandler.js"

const router = new Router()

router.post("/", jsonBodyParser, createPostHandler)
router.get("/", jsonBodyParser, getPostsHandler)
router.delete("/:id", authMiddleware, deletePostHandler)
router.get("/search", searchPostHandler)
router.put("/:id", authMiddleware, editPostHandler)



export default router