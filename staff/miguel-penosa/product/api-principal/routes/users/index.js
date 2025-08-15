import { Router } from 'express'
import { resgisterUserHandler, authenticateUserHandler, getUserNameHandler } from './handlers/index.js'
import jsonBodyParser from '../../middlewares/jsonBodyParser.js'        // Importa un middleware que convierte el body JSON en objeto JavaScript.

const router = new Router()

router.post('/', jsonBodyParser, resgisterUserHandler)      //Está en la raiz porque registrar un usuario suele ser el primer paso lógico

router.post('/auth', jsonBodyParser, authenticateUserHandler)    //Usa el middleware 'jsonBodyParser' para leer el body en formato JSON.

router.get('/', getUserNameHandler)

export default router 