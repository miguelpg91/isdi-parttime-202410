// Prueba del código
console.log("TEST CultMovies.prototype.pop");

console.log("CASE remove movie from cult movies");

function Dorraymon() {
    // Inicializa el array como parte de la instancia
    this.length = 0;  // Almacena la longitud del array
}

// Método pop agregado al prototipo
Dorraymon.prototype.pop = function () {
    if (this.length === 0) {
        return undefined;  // Retorna undefined si no hay elementos
    }
    var removedMovie = this[this.length - 1];  // Obtiene el último elemento
    delete this[this.length - 1];  // Elimina la referencia al último elemento de la nueva instancia
    this.length--;  // Disminuye la longitud
    return removedMovie;  // Retorna la película eliminada
};

var cultmovies = new Dorraymon();  // Crea una nueva instancia de CultMovies

// Asignación directa de películas a la instancia
cultmovies[0] = "Goodfellas";
cultmovies[1] = "Godfather";
cultmovies[2] = "Alien";
cultmovies[3] = "Blade Runner";
cultmovies.length = 4;  // Actualiza la longitud manualmente

var removedMovie = cultmovies.pop();  // Elimina la última película
console.log(removedMovie);  // Imprime la película que fue eliminada
console.log(cultmovies);  // Imprime la instancia de cultmovies después de la eliminación