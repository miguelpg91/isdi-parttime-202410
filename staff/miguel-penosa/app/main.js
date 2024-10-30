///DATA

var users = [] //Array para almacenar usuarios

////PRESENTATION AND BUSINESS (LOGIC)

var body = document.body //no se usa documentElement con el body porque está implemenetado

var title = document.createElement("h1")
title.innerText = ("Hola, App")

body.appendChild(title)

///LANDING

var landingView = document.createElement("main")
body.appendChild(landingView)

var intro = document.createElement("h2") //
intro.innerText = ("Welcome!")

landingView.appendChild(intro)



var landingIntro = document.createElement("p")/////¿¿¿porque este bloque???
landingView.appendChild(landingIntro)/////¿¿¿porque este bloque???

var landingRegisterLink = document.createElement("a")
landingRegisterLink.href = "#"
landingRegisterLink.innerText = "Register"
landingIntro.appendChild(landingRegisterLink)

landingRegisterLink.onclick = function (event) {
    event.preventDefault()///////////
    console.log("go to register")
    body.removeChild(landingView)////LINEA 10, 11
    body.appendChild(registerView)
}

var landingIntroOrText = new Text("or")///////////
landingIntro.appendChild(landingIntroOrText)

var landingLoginLink = document.createElement("a")
landingLoginLink.href = "#";
landingLoginLink.innerText = "Login"
landingIntro.appendChild(landingLoginLink)

///REGISTER

var registerView = document.createElement("main")

var registerTitle = document.createElement("h2")
registerTitle.innerText = "Register"
registerView.appendChild(registerTitle)

var registerForm = document.createElement("form")
registerView.appendChild(registerForm)

//////NAME
var registerFormNameLabel = document.createElement("label")
registerFormNameLabel.innerText = "Name"
registerFormNameLabel.htmlFor = "name"///htmlFor 
registerForm.appendChild(registerFormNameLabel)

var registerFormNameInput = document.createElement("input")
registerFormNameInput.type = "text"
registerFormNameInput.id = "name"
registerForm.appendChild(registerFormNameInput)
///////USERNAME

var registerFormUserNameLabel = document.createElement("label")
registerFormUserNameLabel.innerText = "Username"
registerFormUserNameLabel.htmlFor = "username"
registerForm.appendChild(registerFormUserNameLabel)

var registerFormUserNameInput = document.createElement("input")
registerFormUserNameInput.type = "text"
registerFormUserNameInput.id = "username"
registerForm.appendChild(registerFormUserNameInput)

//////EMAIL

var registerFormEmailLabel = document.createElement("label")
registerFormEmailLabel.innerText = "E-mail"
registerFormEmailLabel.htmlFor = "email"
registerForm.appendChild(registerFormEmailLabel)

var registerFormEmailInput = document.createElement("input")
registerFormEmailInput.type = "text"
registerFormEmailInput.id = "email"///
registerForm.appendChild(registerFormEmailInput)

//////PASSWORD

var registerFormPasswordLabel = document.createElement("label")
registerFormPasswordLabel.innerText = "Password"
registerFormPasswordLabel.htmlFor = "password"
registerForm.appendChild(registerFormPasswordLabel)

var registerFormPasswordInput = document.createElement("input")
registerFormPasswordInput.type = "password"
registerFormPasswordInput.id = "password"
registerForm.appendChild(registerFormPasswordInput)

var registerFormSubmitButton = document.createElement("button")
registerFormSubmitButton.type = "submit"
registerFormSubmitButton.innerText = "Register"
registerForm.appendChild(registerFormSubmitButton)



registerForm.onsubmit = function (event) { ///Define una función que se ejecutará al enviar el formulario "registerForm"
    event.preventDefault()
    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value    //////// Obtiene el valor del campo de entrada "email" y lo asigna a la variable "email"
    var username = registerFormUserNameInput.value
    var password = registerFormPasswordInput.value

    var found = users.some(function (user) {
        if (user.email === email || user.username === username)
            return true
        return false
    });
    if (found) {
        alert("user already exist")
        return
    }
    var user = {}               // // Crea un objeto llamado "user" que contendrá los datos del nuevo usuario
    user.name = name,
        user.email = email,           ///////// Asigna el valor de la variable "email" al campo "email" del objeto
        user.username = username,
        user.password = password

    users.push(user);



    /*

    var user = {                // // Crea un objeto llamado "user" que contendrá los datos del nuevo usuario
        name: name,
        email: email,           ///////// Asigna el valor de la variable "email" al campo "email" del objeto
        username: username,
        password: password
    };
    users.push(user);           // Agrega el nuevo usuario al array "users"
    console.log("Usuario registrado", user);
    console.log("Usuarios registrados", users); ///users es un array de todos los user LINEA 1
*/
    registerForm.reset()        // Limpia el formulario después de registrar al usuario

    body.removeChild(registerView)
    body.appendChild(loginView)

};

///LOGIN///


var loginView = document.createElement("main")

loginTitle = document.createElement("h2")
loginTitle.innerText = "Login"
loginView.appendChild(loginTitle)

var loginForm = document.createElement("form")
loginView.appendChild(loginForm)


//////NAME
var loginFormNameLabel = document.createElement("label")
loginFormNameLabel.innerText = "Name"
loginFormNameLabel.htmlFor = "name"///htmlFor:enlaza el <label> a un elemento <input> con id="name"
loginForm.appendChild(loginFormNameLabel)

var loginFormNameInput = document.createElement("input")
loginFormNameInput.type = "text"
loginFormNameInput.id = "name"
loginForm.appendChild(loginFormNameInput)
///////USERNAME

var loginFormUserNameLabel = document.createElement("label")
loginFormUserNameLabel.innerText = "Username"
loginFormUserNameLabel.htmlFor = "username"
loginForm.appendChild(loginFormUserNameLabel)

var loginFormUserNameInput = document.createElement("input")
loginFormUserNameInput.type = "text"
loginFormUserNameInput.id = "username"
loginForm.appendChild(loginFormUserNameInput)

//////EMAIL

var loginFormEmailLabel = document.createElement("label")
loginFormEmailLabel.innerText = "E-mail"
loginFormEmailLabel.htmlFor = "email"
loginForm.appendChild(loginFormEmailLabel)

var loginFormEmailInput = document.createElement("input")
loginFormEmailInput.type = "text"
loginFormEmailInput.id = "email"///
loginForm.appendChild(loginFormEmailInput)

//////PASSWORD

var loginFormPasswordLabel = document.createElement("label")///label: Muestra el texto "Password" 
loginFormPasswordLabel.innerText = "Password"
loginFormPasswordLabel.htmlFor = "password"/// htmlFor: se vincula al campo de entrada (input)

var loginFormPasswordInput = document.createElement("input")    ///input: Es el campo donde el usuario escribe la contraseña
loginFormPasswordInput.type = "password"
loginFormPasswordInput.id = "password"///id: permite que el <label> se relacione directamente con él.
loginForm.appendChild(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement("button")
loginFormSubmitButton.type = "submit"
loginFormSubmitButton.innerText = "Login"
loginForm.appendChild(loginFormSubmitButton)


loginForm.onsubmit = function (event) { // Define la función
    event.preventDefault(); // Evita el envío del formulario

    var username = loginFormUserNameInput.value;
    var password = loginFormPasswordInput.value;

    var foundUser = users.find(function (user) { // Corrige el paréntesis de cierre
        return user.username === username && user.password === password;
    });

    if (foundUser) {    //// Si se encuentra un usuario con las credenciales correctas
        console.log("Login exitoso:", foundUser)
        alert("Bienvenido " + foundUser.name + "!")        //Imprime: "string" + usuario


        loginForm.reset() // Limpia el formulario de inicio de sesión

        // Redirigir a la vista de inicio
        body.removeChild(loginView) // Elimina la vista de inicio de sesión

        var homeView = document.createElement("main")
        var homeTitle = document.createElement("h2")
        homeTitle.innerText = "Home"
        homeView.appendChild(homeTitle)
        body.appendChild(homeView) // Agrega la vista de inicio al cuerpo del documento(BODY: CONTENEDOR PRINCIPAL)


    } else {
        alert("Usuario no encontrado")
    }
};


///TODO validate credentials against users db (HINT find). if credentials ok, then go to home. otherwise show alert with: wrong credentials


