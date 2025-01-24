import express from "express"

import logic from "./logic/index.js"

const PORT = 8080

const api = express()   ///Crea una instancia de un servidor Express llamado api

const jsonBodyParser = express.json()

api.get('/', (req, res) => res.send('Hello, API!'))   ///Maneja solicitudes GET en la ruta /helloworld y Responde con el mensaje 'Hello, API!'

api.post("/users", jsonBodyParser, (req, res) => {              //Maneja solicitudes POST en la ruta /users para registrar nuevos usuarios
    try {                                                           //req.body suele ser un objeto que contiene los datos enviados por el cliente
        const { name, username, email, password } = req.body            //{ name, username, email, password } desestructuración de objetos: Permite extraer propiedades específicas de un objeto de manera sencilla

        logic.registerUser(name, username, email, password)                 //Intenta registrar al usuario llamando a logic.registerUser() con los datos enviados en req.body

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post("/users/auth", jsonBodyParser, (req, res) => {     ///Configura un middleware que Convierte el cuerpo de la solicitud (req.body) en un objeto JavaScript
    try {
        const { username, password } = req.body             //Extrae username y password de req.body

        const userId = logic.authenticateUser(username, password)   //Llama para autenticar al usuario.

        res.json(userId)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/users', (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6) // Basic abc123

        const name = logic.getUserName(userId)

        res.json(name)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/posts', (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6) // Basic abc123

        const posts = logic.getPosts(userId)

        res.json(posts)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }

})

api.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6) // Basic abc123

        const { image, text } = req.body

        logic.createPost(userId, image, text)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.delete('/posts/:postId', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6) // Basic abc123

        const { postId } = req.params

        logic.deletePost(userId, postId)

        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.listen(PORT, () => console.log(`API running on port ${PORT}`))














/*Maneja solicitudes POST en la ruta /users para registrar nuevos usuarios.
Detalles:
Usa jsonBodyParser para procesar el cuerpo de la solicitud.
Extrae los datos del usuario del cuerpo (req.body).
Llama a logic.registerUser para registrar al usuario.
Si todo va bien:
Responde con un estado 201 (creado).
Si hay un error:
Responde con un estado 400 (mala solicitud) y un mensaje con el tipo y el detalle del error. */

/*Inicia el servidor para escuchar peticiones en el puerto definido (PORT).
Callback:
Imprime en la consola un mensaje indicando que el servidor está corriendo y en qué puerto.*/


//¿¿¿QUE SON RUTAS?