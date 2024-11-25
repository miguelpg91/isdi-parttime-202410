
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
registerFormNameLabel.htmlFor = "name"          /// htmlFor: se vincula al campo de entrada (input)
registerForm.appendChild(registerFormNameLabel)

var registerFormNameInput = document.createElement("input")     ///input: Es el campo donde el usuario escribe la contraseña
registerFormNameInput.type = "text"
registerFormNameInput.id = "name"               ///id: permite que el <label> se relacione directamente con él.
registerForm.appendChild(registerFormNameInput)
///////USERNAME

var registerFormUsernameLabel = document.createElement("label")
registerFormUsernameLabel.innerText = "Username"
registerFormUsernameLabel.htmlFor = "username"
registerForm.appendChild(registerFormUsernameLabel)

var registerFormUsernameInput = document.createElement("input")
registerFormUsernameInput.type = "text"
registerFormUsernameInput.id = "username"
registerForm.appendChild(registerFormUsernameInput)

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

    var name = registerFormNameInput.value   // Obtiene el valor del campo de entrada "name" del formulario.
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    try {                                               // Intenta ejecutar las siguientes instrucciones.
        registerUser(name, email, username, password)   // Llama a la función `registerUser` para registrar al usuario con los valores obtenidos.

        registerForm.reset()

        body.removeChild(registerView)
        body.appendChild(loginView)
    } catch (error) {                           // Captura cualquier error que haya ocurrido en el bloque "try" y ejecuta las instrucciones de manejo de errores.
        alert(error.message)

        console.error(error)
    }
}

//
var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Login'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    body.removeChild(registerView)
    body.appendChild(loginView)
}
registerView.appendChild(registerLoginLink)