
var landingView = document.createElement("main")
body.appendChild(landingView)

var intro = document.createElement("h2") //
intro.innerText = ("Welcome!")

landingView.appendChild(intro)

//landingIntro: agrupa en un mismo bloque el enlace de "Register," el texto "or," y el enlace de "Login.

var landingIntro = document.createElement("p")
landingView.appendChild(landingIntro)

var landingRegisterLink = document.createElement("a")
landingRegisterLink.href = ""
landingRegisterLink.innerText = "Register"
landingIntro.appendChild(landingRegisterLink)

//// Controla el clic en el enlace "Register"////

landingRegisterLink.onclick = function (event) {
    event.preventDefault()                          //Evita que el enlace recargue la página
    console.log("go to register")
    body.removeChild(landingView)
    body.appendChild(registerView)
}

var landingIntroOrText = new Text("or")///////////
landingIntro.appendChild(landingIntroOrText)

var landingLoginLink = document.createElement("a")
landingLoginLink.href = "";
landingLoginLink.innerText = "Login"
landingIntro.appendChild(landingLoginLink)

///// Controla el clic en el enlace "Login"

landingLoginLink.onclick = function (event) {
    event.preventDefault()

    body.removeChild(landingView)
    body.appendChild(loginView)
}