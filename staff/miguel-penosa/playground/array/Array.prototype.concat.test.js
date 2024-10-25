function Dorraymon() {
    this.length = 0;
}

Dorraymon.prototype.concat = function (values) {
    var result = new Dorraymon
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }
}
console.log("TEST Dorraymon.prototype.concat")
console.log("CASE merge fruits and veggies")

var fruits = new Dorraymon

fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "lemon";
fruits[3] = "banana";
fruits[4] = "cherry";
fruits.length = 5

var veggies = new Dorraymon

veggies[0] = "lettuce";
veggies[1] = "onion";
veggies[2] = "garlic";
veggies[3] = "carrot";
veggies[4] = "lentice";
veggies.length = 5

var food = fruits.concat(veggies)

console.log(fruits)
console.log(veggies)
console.log(food)

////


// Función constructora para inicializar una lista de deportes
function Deportes() {
    this.length = 0;  // Inicializa la longitud del array
}

// Método concat agregado al prototipo de Deportes
Deportes.prototype.concat = function (otroDeporte) {
    var resultado = new Deportes();  // Crea una nueva instancia de Deportes

    // Agrega los deportes de la primera instancia (this)
    for (var i = 0; i < this.length; i++) {
        resultado[resultado.length] = this[i];
        resultado.length++;
    }

    // Agrega los deportes de la segunda instancia (otroDeporte)
    for (var j = 0; j < otroDeporte.length; j++) {
        resultado[resultado.length] = otroDeporte[j];
        resultado.length++;
    }

    return resultado;  // Retorna la instancia concatenada
};

// Crear dos instancias de Deportes con asignación directa
var misDeportes1 = new Deportes();
misDeportes1[0] = "fútbol";
misDeportes1[1] = "baloncesto";
misDeportes1.length = 2;

var misDeportes2 = new Deportes();
misDeportes2[0] = "tenis";
misDeportes2[1] = "mma";
misDeportes2.length = 2;

// Concatenar las dos listas de deportes
var deportesCombinados = misDeportes1.concat(misDeportes2);

// Imprimir los deportes combinados
console.log(deportesCombinados);