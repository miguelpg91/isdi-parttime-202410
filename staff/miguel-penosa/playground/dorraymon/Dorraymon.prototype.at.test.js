/*
Dorraymon es una función constructora. Se utiliza para crear instancias de un objeto.
Se invoca utilizando new. Cuando llamas a new Dorraymon(), se crea un nuevo objeto 
con las propiedades y métodos que se definen dentro de ella.

*/
function Dorraymon() {
    this.length = 0;
}

Dorraymon.prototype.at = function (index) { //Un método en la programación orientada a objetos, es una función que está asociada a un objeto o a una clase.
    if (index < 0) {
        index = this.length + index;
    }
    return this[index]
}

console.log("TEST Dorraymon.prototype.at()")

var cultmovies = new Dorraymon()

cultmovies[0] = ["Goodfellas"]
cultmovies[1] = ["Godfather"]
cultmovies[2] = ["Alien"]
cultmovies[3] = ["Blade Runner"]
cultmovies.length = 4;

console.log("CASE access last movie using at()")

var lastMovie = cultmovies.at(-2)

console.log(lastMovie)

var cultmovies = ("Clockworkorange", "Godfather", "Alien", "Blade Runner")
var damovie = cultmovies.at
console.log(damovie)

const cultmovies = { "Goodfellas", "Godfather", "Alien", "Blade Runner" };

// Usando el método at para acceder a elementos
console.log(cultmovies.at(0));

///

var coches = new Dorraymon()
coches[0] = { marca: "Toyota", modelo: "Corolla", año: 1999 };
coches[1] = { marca: "Mercedes", modelo: "Clase C", año: 1993 };
coches[2] = { marca: "Lexus", modelo: "RX", año: 2005 };
coches[3] = { marca: "Mazda", modelo: "Mazda 3", año: 1991 };
coches.length = 4;

var resultadoCoche = coches.at(-2);
console.log(resultadoCoche); ///marca: 'Lexus', modelo: 'RX', año: 2005

///