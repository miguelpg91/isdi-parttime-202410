/*
El método find() en JavaScript se utiliza para encontrar el primer elemento en un array (o en un objeto iterable) que cumpla con una condición específica, 
definida por una función de prueba. Devuelve el primer elemento que cumple con la condición o undefined si no se encuentra ninguno.

*/

function Dorraymon() {
    this.length = 0;
}

Dorraymon.prototype.find = function (callback) {        //  El callback es la función que tú le pasas al método find().
    for (let i = 0; i < this.length; i++) {             //  this[i] : el valor en la posición i    ;        i: El índice del elemento en el array/objeto       ; this:  El propio objeto que está llamando al método find()
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

var videogames = new Dorraymon();
videogames[0] = "GTA";
videogames[1] = "Godfather";
videogames[2] = "Alien";
videogames[3] = "Blade Runner";
videogames.length = 4;

var daGame = videogames.find(function (element) {
    return element.startsWith('G');  // Condición: el título debe empezar con 'G'
});

console.log(daGame);


