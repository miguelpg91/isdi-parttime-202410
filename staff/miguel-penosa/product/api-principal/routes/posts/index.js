import { Router } from 'express'
import { createPostHandler, getPostsHandler, deletePostHandler, updatePostTextHandler, toggleLikePostHandler } from './handlers/index.js'
import jsonBodyParser from '../../middlewares/jsonBodyParser.js'

const router = new Router()

router.get('/', getPostsHandler)

router.post('/', jsonBodyParser, createPostHandler)     //PORUQE :POSTID ; PORQUE PATCH LLEVA JSONBODYPARSER Y EL OTRO NO

router.delete('/:postId', deletePostHandler)    // /:postId = parámetro dinámico: Express aceptará cualquier valor en esa parte de la URL 
router.patch('/:postId', toggleLikePostHandler)

router.patch('/:postId', jsonBodyParser, updatePostTextHandler)

export default router