var body = document.body //no se usa documentElement con el body porque está implemenetado



var title = documentElement("h1")
title.innerText = ("Hola, App")

body.appendChild(title)

var landing = document.createElement("main")////////Cuando document.createElement ?
body.appendChild(landing)

var intro = documentElement("h2") //documentElement porque es un texto
intro.innerText = ("Welcome!")

landing.appendChild(intro)

var landingIntro = createElement("p")
intro.appendChild(landingIntro)

var landingRegisterLink = document.createElement("a")/////////Cuando document.createElement ?
landingRegisterLink.href = ""
landingRegisterLink.innerText = "Register"
landingIntro.appendChild(landingRegisterLink)

var landingIntroOrText = new Text("or")///////////
landingIntro.appendChild(landingIntroOrText)

var landinglo



