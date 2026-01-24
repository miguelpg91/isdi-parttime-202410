0️⃣ FRONTEND — fetch

(NO lo has pegado ahora, pero es el origen)

👉 Nombre: Petición HTTP desde el cliente

Envía:

body → datos (JSON)

headers.authorization → token


/////////


1️⃣ server.js

👉  app.use(express.json())

→ Middleware global (parseo JSON)

👉  app.use("/api/posts", postsRouter)

→ Montaje de router ❗

👉 Función global de server.js:

-Arranca Express

-Registra middlewares globales

-Monta routers

-Arranca el servidor


/////////


2️⃣ routes/posts/index.js

const router = new Router()


👉 Nombre: Router de Posts

👉 Función:

-Define QUÉ rutas existen

-Define el ORDEN de ejecución

Ejemplo concreto:

router.post("/", jsonBodyParser, createPostHandler)


/////////


3️⃣ jsonBodyParser

import jsonBodyParser from "../../middlewares/jsonBodyParser.js"


👉 Nombre: Middleware de parsing del body

👉 Función:

-Convierte el body de texto JSON → objeto JS

-Hace que exista req.body

📌 (Esto ocurre SOLO porque el router lo pone antes del handler)


/////////


4️⃣ authMiddleware (cuando está presente)

import authMiddleware from "../../middlewares/authMiddleware.js"


👉 Nombre: Middleware de autenticación

👉 Función:

-Lee req.headers.authorization

-Extrae el token

-Verifica el token

-Añade req.userId

-Decide si se continúa o se corta

📌 Solo se ejecuta en rutas que lo incluyen:

router.delete("/:id", authMiddleware, deletePostHandler)


/////////


5️⃣ createPostHandler

export const createPostHandler = async (req, res, next) => { ... }


👉 Nombre: Handler / Controlador HTTP

👉 Función:

-Lee req.body

-Lee req.userId (si existe)

-Traduce HTTP → lógica de negocio

-Maneja res y next(error)

Ejemplo:

const { ciudad, text, precio, tipo, userId, imagen } = req.body


/////////

6️⃣ logic.createPost

export default async function createPost(ciudad, text, precio, imagen, tipo, userId) { ... }


👉 Nombre: Lógica de negocio / Use case

👉 Función:

-Validar datos

-Aplicar reglas

-Decidir qué se guarda

-NO sabe nada de Express

-NO usa req ni res


/////////


7️⃣ Post (modelo)

import Post from "../models/Post.js"


👉 Nombre: Modelo / Capa de persistencia

👉 Función:

-Hablar con MongoDB

-Guardar / leer datos

-No sabe nada del frontend


/////////


8️⃣ VUELTA AL HANDLER

res.status(201).json(newPost)


👉 Nombre: Respuesta HTTP

👉 Función:

-Convierte JS → JSON

-Envía la respuesta al cliente


/////////


9️⃣ FRONTEND RECIBE

const data = await res.json()


👉 Nombre: Parseo de respuesta

👉 Función:

-Convierte JSON → JS

Fin del ciclo