const express = require("express")

const server = express()

const logic = require("./logic/index")  //La ruta es relativa al archivo desde el que haces el require

const PORT = 8080   ///define el puerto en el que el servidor escuchará las peticiones (8080 en este caso).

server.get("/register", (req, res) => {
    if (logic.isUserLoggedIn()) {               ////////Determina si un usuario está autenticado nos lleva a home
        res.redirect("/")

        return
    }                                               ///form action: los datos del formulario se enviarán a la ruta "/login"
    res.send(`<doctype html>
    <html>
        <head>
            <title>Register</title>
        </head>
        <body>
            <h2>Register</h2>
            <form action="/register" method="post">                     <!-- action:  ruta a la que se enviarán los datos del formulario -->
                <label for="username">Username</label>                  <!-- El FOR conecta con el ID de input -->
                <input id="username" name="username" type="text">

                <label for="name">Name</label>
                <input id="name" name="name" type="text">

                <label for="email">E-mail</label>
                <input id="email" name="email" type="email"      

                <label for="password">Password</label>
                <input id="password" name="password" type="password"

                <button type="submit">Register</button>
            </form>
        </body>

    </html>
   `)
})

server.post("/register", express.urlencoded({ extended: true }), (req, res) => {  //urlencoded: Middleware que procesa los datos enviados por el formulario y los convierte en un objeto accesible a través de req.body.
    const { username, name, email, password } = req.body                                ///realiza un desestructurado de objetos en JavaScript, extrayendo los valores de username, name, email y password desde el objeto req.body /// req body : Estos datos provienen de un formulario HTML, una API, o cualquier otra fuente que envíe información al servidor.


    try {
        logic.registerUser(username, name, email, password)

        res.redirect("/login")
    } catch (error) {
        res.status(400).send(error.message)
    }
})


server.get("/login", (req, res) => {        //GET /login: Si el usuario ya está logueado (según la función isUserLoggedIn), se le redirige a la página de inicio (/).   //GET: para servir el formulario de registro. 
    if (logic.isUserLoggedIn()) {           ////////Determina si un usuario está autenticado
        res.redirect("/")

        return                                 //Detiene la ejecución de la función si las contraseñas no coinciden.
    }                                         // Si no está logueado, muestra el formulario de login

    res.send(`<doctype html>                  
<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <h2>Login</h2>

        <form action="/login" method="post">
            <label for="username">Username</label>
            <input id="username" name="username" type="text">

            <label for="password">Password</label>
            <input id="password" name="password" type="password">

            <button type="submit">Login</button>
        </form>
    </body>
</html>
`)
})

server.post("/login", express.urlencoded({ extended: true }), (req, res) => {      /// POST /login: Recibe los datos del formulario (nombre de usuario y contraseña) enviados por el usuario.
    ///const username = req.body.username                                          ///POST: para manejar los datos enviados desde el formulario.
    ///const password = req.body.password
    const { username, password } = req.body

    try {
        logic.loginUser(username, password)      // Intenta autenticar al usuario con las credenciales

        res.redirect("/")

    } catch (error) {
        res.status(400).send(error.message)
    }
})

server.get("/", (req, res) => {
    if (!logic.isUserLoggedIn()) {
        res.redirect("/login")          // Si no está logueado, redirige a la página de login

        return
    }

    let name

    try {
        name = logic.getUserName()      // Intenta obtener el nombre del usuario
    } catch (error) {
        res.status(400).send(error.message)

        return
    }                                    // Si todo está bien, muestra la página de inicio con el nombre del usuario

    res.send(`<doctype html>                       
<html>
    <head> 
        <title>Home</title>
    </head>
    <body>
        <h2>Home</h2>

        <p>Hello, ${name}!</p>

        <form action="/logout" method="post">
            <button type="submit">Logout</button>
        </form>
    </body>
</html>
`)
})

server.post("/logout", (req, res) => {
    try {
        logic.logoutUser()      // Cierra la sesión del usuario

        res.redirect("/login")          //redirige a la página de login
    } catch (error) {
        res.status(400).send(error.message)

    }
})

server.listen(PORT, () => console.log(`server listening on port ${PORT}`))      //Hace que el servidor escuche las peticiones en el puerto 8080 y muestra un mensaje en la consola cuando el servidor está listo.

