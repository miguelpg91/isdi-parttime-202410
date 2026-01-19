import { json, Router } from "express"
import jsonBodyParser from "../../middlewares/jsonBodyParser.js"
import authMiddleware from "../../middlewares/authMiddleware.js"
import createPostHandler from "./handlers/createPostHandler.js"
import deletePostHandler from "./handlers/deletePostHandler.js"
import getPostsHandler from "./handlers/getPostsHandler.js"
import searchPostHandler from "./handlers/searchPostHandler.js"
import editPostHandler from "./handlers/editPostHandler.js"

const router = new Router()

router.post("/", authMiddleware, jsonBodyParser, createPostHandler)
router.get("/", jsonBodyParser, getPostsHandler)
router.delete("/:id", authMiddleware, deletePostHandler)
router.get("/search", searchPostHandler)
router.put("/:id", authMiddleware, jsonBodyParser, editPostHandler)     /// Lleva ambos middlewares porque necesita el token para tener acceso y parsear la peticion

///Que hace PUT??????

export default router

///ROUTERS


/* 


req.params = parámetros extraídos de la URL según la ruta definida (/:id)

PUT /posts/65fa1c9e2f4a9c0012ab3e91

req.params.id = "65fa1c9e2f4a9c0012ab3e91"



*/