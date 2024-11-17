console.log("TEST Array.prototype.at")

console.log("CASE get car at index2")

//var cars = ["lambo", "lexus", "bmw", "mercedes", "porsche"]

var cars = new Array
cars[0] = "lambo"
cars[1] = "lexus"
cars[2] = "bmw"
cars[3] = "mercedes"
cars[4] = "porsche"
var chosencar = cars.at(2)

console.log(chosencar)  //"bmw"

var funs = new Array        // array de funciones, funs es una instancia del objeto Array
funs[0] = function () { return 'Zero' }     //función anónima
funs[1] = function () { return 'One' }
funs[2] = function () { return 'Two' }
funs[3] = function () { return 'Three' }
var fun = funs.at(2)

console.log(fun())

var videogames = new Array
videogames[0] = { title: "Fifa", year: 1999, genre: "sports" } //objetos individuales dentro del array cart
videogames[1] = { title: "Metal Gear Solid", year: 1998, genre: "action" }
videogames[2] = { title: "Collin McRae", year: 1996, genre: "cars" }
videogames[3] = { title: "Counter Strike", year: 2000, genre: "sports" }

var chosengame = videogames.at(-1) //Counter Strike

console.log(chosengame)



