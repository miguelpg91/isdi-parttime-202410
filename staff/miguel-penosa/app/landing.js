var body = document.body

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
landingLoginLink.href = "";
landingLoginLink.innerText = "Login"
landingIntro.appendChild(landingLoginLink)

landingLoginLink.onclick = function (event) {
    event.preventDefault()

    body.removeChild(landingView)
    body.appendChild(loginView)
}