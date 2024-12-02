const express = require("express")      // Importa el módulo express, que es un framework de Node.js para manejar servidores HTTP

const server = express()

server.get("/helloworld", (req, res) => res.send("Hello, World!"))

server.get("/hello", (req, res) => {
    const to = req.query.to

    res.send(`Hello, ${to}!`)
})

// http://localhost:8080/salute?type=Bye&to=Peter

server.get("/salute", (req, res) => {       ///Ahora, nuestro servidor puede saludar a alguien en particular
    const type = req.query.type || "Hello"
    const to = req.query.to

    res.send(`${type}, ${to}!`)
})

server.get("/add/:a/:b", (req, res) => {
    const a = req.params.a
    const b = req.params.b

    const result = Number(a) + Number(b)

    res.send(`result = ${result}`)
})

server.listen(8080, () => {
    console.log("Servidor corriendo en http://localhost:8080");
});



///Permite que el servidor reciba y responda solicitudes HTTP en el puerto 8080


/// 7 ¿Qué hace?: Cuando alguien escribe en su navegador http://localhost:8080/helloworld, nuestro servidor responde con las palabras "Hello, World!".
/// 15 Aquí el servidor puede decir algo diferente, como "Bye, Peter!" en lugar de "Hello, Peter!".
/// 22 Si escribes http://localhost:8080/add/5/10, responderá "result = 15" porque suma 5 + 10.

/*
Un servidor es como un asistente personal para tu computadora. Está ahí para responder preguntas o hacer tareas cuando otra persona (o programa) lo solicita. Por ejemplo:

Cuando escribes google.com en tu navegador, tu computadora está haciendo una "pregunta" al servidor de Google: "¿Puedes darme la página de inicio de Google?"
El programa que estás creando con Express es justamente un servidor

Express simplifica todo y nos da herramientas preconstruidas para:

Crear rutas (como calles específicas para diferentes preguntas).
Enviar respuestas claras (como mensajes, números o incluso imágenes).

*/