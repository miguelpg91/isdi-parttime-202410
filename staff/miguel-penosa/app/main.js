var users = [] //Array para almacenar usuarios

var body = document.body //no se usa documentElement con el body porque está implemenetado

var title = document.createElement("h1")
title.innerText = ("Hola, App")

body.appendChild(title)

var landingView = document.createElement("main")////////Cuando document.createElement ?
body.appendChild(landingView)

var intro = document.createElement("h2") //
intro.innerText = ("Welcome!")

landingView.appendChild(intro)

var landingIntro = document.createElement("p")
landingView.appendChild(landingIntro)/////OJO

var landingRegisterLink = document.createElement("a")
landingRegisterLink.href = ""
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
landingLoginLink.href = "";
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
registerFormUserNameLabel.type = "text"
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



registerForm.onsubmit = function (event) {
    event.preventDefault()
    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUserNameInput.value
    var password = registerFormPasswordInput.value

    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    };
    users.push(user);
    console.log("Usuario registrado", user);
    console.log("Usuarios registrados", users);

    registerForm.reset()

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
loginFormUserNameLabel.type = "text"
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

var loginFormPasswordLabel = document.createElement("label")
loginFormPasswordLabel.innerText = "Password"
loginFormPasswordLabel.htmlFor = "password"
loginForm.appendChild(loginFormPasswordLabel)

var loginFormPasswordInput = document.createElement("input")
loginFormPasswordInput.type = "password"
loginFormPasswordInput.id = "password"
loginForm.appendChild(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement("button")
loginFormSubmitButton.type = "submit"
loginFormSubmitButton.innerText = "Login"
loginForm.appendChild(loginFormSubmitButton)


loginForm.onSubmit = function (event) {
    event.preventDefault() //// //preventDefault: Evita que el formulario se envíe y la página se recargue






}

    ///TODO validate credentials against users db (HINT find). if credentials ok, then go to home. otherwise show alert with: wrong credentials


    */*
loginForm.onsubmit = function (event) {
    event.preventDefault()
    var username = loginFormUserNameInput.value
    var password = loginFormPasswordInput.value

    var foundUser = users.find(function(user) {
        return user.username === username && user.password === password
    })

    if (foundUser) {
        console.log("Login exitoso:", foundUser)
        // Lógica para mostrar la vista de inicio o home
        alert("Bienvenido " + foundUser.name + "!")
        loginForm.reset()
        // Redirigir a la vista de inicio
        body.removeChild(loginView)
        var homeView = document.createElement("main")
        var homeTitle = document.createElement("h2")
        homeTitle.innerText = "Bienvenido a tu Home"
        homeView.appendChild(homeTitle)
        body.appendChild(homeView)
    } else {
        alert("Credenciales incorrectas")
    }
}