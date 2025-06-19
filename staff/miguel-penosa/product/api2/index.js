import 'dotenv/config'

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import { usersRouter, postsRouter } from './routes/index.js'  //Un router agrupa las rutas relacionadas para tener el código ordenado.
import errorHandler from './middlewares/errorHandler.js'

const connectToDb = () => mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connected')) //Defines la funcion que conecta mongoose con MongoDb

const startApi = () => {    //Define una función que arranca el servidor API.
    const api = express()      //Crea una nueva aplicación Express (el servidor).

    api.use(cors())         //Aplica el middleware cors a todas las rutas, permitiendo conexiones desde otros orígenes.

    api.use(express.json()) //Permite que el servidor entienda peticiones con cuerpo en formato JSON

    api.get('/', (req, res) => res.send('Hello, API'))      //Define una ruta raíz (/)

    api.use('/users', usersRouter)  //cuando alguien pida algo que empiece con /users, pásale la petición a este bloque llamado usersRouter, que ya sabe cómo responder.

    api.use('/posts', postsRouter)

    api.use(errorHandler) //middleware puede hacer algo con la petición o respuesta (por ejemplo, revisar datos, registrar información, validar, etc.)Si está todo bien,deja pasar (llama a next())

    api.listen(process.env.PORT, () => console.log(`API running on port {process.env.PORT}`))   //listen le dice al servidor que escuche peticiones en el puerto que le indiques. process.env.PORT es una variable de entorno donde defines el puerto donde quieres que corra el servidor
}

connectToDb()   // llamas a la función que conecta mongoose con MongoDb usando mongoose.connect()
    .then(() =>
        startApi()      //Cuando la conexion es exitosa entonces inicia el servidor
    )
    .catch(error => console.error(error))  // Cuando falla, salta el error


//Carga automáticamente las variables de entorno desde un archivo .env al objeto process.env. Esto permite guardar información sensible como contraseñas o URLs fuera del código.
//"/users" Son rutas, es como departamentos del servidor, que hacen algo distinto.

//PROMESAS: Objeto que representa una tarea que termina en el futuro,  permiten que tu código no se "congele" mientras espera algo lento (como la base de datos)

//VARIABLES DE ENTORNO:  las variables de entorno son informacion sensible en un archivo secreto (.env)
