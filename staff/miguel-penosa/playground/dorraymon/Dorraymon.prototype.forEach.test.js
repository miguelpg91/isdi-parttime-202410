/*El método forEach() en JavaScript es utilizado para ejecutar una función en cada elemento de un array
 (o de un objeto que se comporte como un array, como es el caso de la función Dorraymon que has definido).


function Dorraymon() {
    this.length = 0;
}

// Método 'forEach' para recorrer todos los elementos
Dorraymon.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);  // Llamamos al callback por cada elemento
    }
};

var videogames = new Dorraymon();
videogames[0] = "GTA";
videogames[1] = "Godfather";
videogames[2] = "Alien";
videogames[3] = "Blade Runner";
videogames.length = 4;

videogames.forEach(function (element, index, array) {
    console.log(`El juego en el índice ${index} es: ${element}`);
});