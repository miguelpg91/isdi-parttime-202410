import express from "express"

import logic from "./logic/index.js"

const PORT = 8080

const api = express()   ///Crea una instancia de un servidor Express llamado api

const jsonBodyParser = express.json()   //express.json() es un método de Express que analiza el cuerpo de la solicitud y lo convierte en un objeto JavaScript accesible en req.body.

api.use(cors())

api.get("/", (req, res) => res.send("Hello Api!"))

api.post("/users", jsonBodyParser, (req, res) => {
    try {
        const { name, email, username, password } = req.body    //Extrae los valores de name, email, username, y password del cuerpo de la solicitud (req.body).

        logic.registerUser(name, email, username, password)     //Llama a RegisterUser para registrar el usuario con los datos extraídos.

        res.status(201).send()  //Si el registro es exitoso 201 (Creado)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post("/users/auth", jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        const userId = logic.authenticateUser(username, password)

        res.json(userId)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

