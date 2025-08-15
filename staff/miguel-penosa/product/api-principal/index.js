import 'dotenv/config'      //Carga las variables de entorno 

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'             //Permito que cualquier frontend (en cualquier dominio o puerto) haga peticiones

import { usersRouter, postsRouter } from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'

const connectToDb = () => mongooose.connect(process.env.MONGO_URL).then(() => console.log('DB connected'))  //Conecta con la base de datos

const startApi = () => {
    const api = express()       //Crea la app Express

    api.use(cors())         // ???

    api.get('/', (req, res) => res.send('Hello, API!'))     //Define la ruta raíz

    api.use('/users', usersRouter)      //Usa el router de usuarios para todas las rutas que empiezan por /users.

    api.use('/posts', postsRouter)

    api.use(errorHandler)       // Usa el middleware

    api.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`))      //Inicia el servidor y lo pone a escuchar en el puerto que hayas puesto en .env

}

connectToDb()       // Si la conexión a la base de datos fue exitosa, entonces ejecuta startApi() para iniciar el servidor Express.
    .then(() =>
        startApi()
    )
    .catch(error => console.error(error))







//(req, res) Son los objetos que Express te da automáticamente en cada ruta para: información que envía el cliente y responder al cliente