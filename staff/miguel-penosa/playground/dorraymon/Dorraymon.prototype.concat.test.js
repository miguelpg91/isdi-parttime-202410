function Dorraymon() {
    this.length = 0;
}

Dorraymon.prototype.concat = function (values) { ///si quieres manejar una cantidad variable de argumentos, arguments te permite acceder a todos los valores pasados sin necesidad de definirlos explícitamente.(vacio)
    var result = new Dorraymon
    //this -> Dorraymon {0:"apple",1:"orange",2:"lemon",3:"banana",4:"cherry",length:5}
    //values -> Dorraymon {0:"lettuce",1:"onion",2:"garlic",3:"carrot",4:"lentice",length:5}
    //result -> Dorraymon {length:0}

    //result [0] = this[0] // result -> Dorraymon { 0: "apple", length: 0 }
    //result.length++      // result -> Dorraymon { 0: "apple", length: 1 }

    //result [1] = this[1] // result -> Dorraymon { 0: "apple", 1: "orange", length: 1 }
    //result.length++      // result -> Dorraymon { 0: "apple", 1: "orange", length: 2 }

    //result [2] = this[2] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", length: 2 }
    //result.length++    //   result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", length: 3 }

    //result [3] = this[3] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", length: 3 }
    //result.length++   //      result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", length: 4 }

    //result [4] = this[4] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", length: 4 }
    //result.length++ //      result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", length: 5 }

    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]     ///copia elementos de this (el primer objeto Dorraymon) en el mismo índice dentro de result
        result.length++
    }

    //result [5] = values[0] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", length: 5 }
    //result.length++ //        result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", length: 6 }

    //result [6] = values[1] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion", length: 6 }
    //result.length++ //        result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce"", 6: "onion",  length: 7 }

    //result [7] = values[2] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", length: 7 }
    //result.length++ //        result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", length: 8 }

    //result [8] = values[3] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", 8: "carrot", length: 8 }
    //result.length++ //        result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", 8: "carrot", length: 9 }

    //result [9] = values[4] // result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", 8: "carrot", 9: "lentice", length: 9 }
    //result.length++ //        result -> Dorraymon { 0: "apple", 1: "orange", 2: "lemon", 3: "banana", 4: "cherry", 5: "lettuce", 6: "onion" 7: "garlic", 8: "carrot", 9: "lentice", length: 10 }

    for (var i = 0; i < values.length; i++) {
        result[result.length] = values[i]       ///values[i] añade elementos de values (el segundo objeto Dorraymon) al final de result, usando result.length para colocar cada elemento en la siguiente posición libre.
        result.length++
    }

    return result



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
/*

var drinks = new Dorraymon()
drinks[0] = "cocacola";
drinks[1]= "cerveza";
drinks[2] = "vino";
drinks.length = 3;

*/


var food = fruits.concat(veggies) //el objeto fruits es quien llama al método concat, de esta forma, this se refiere al objeto que lo invoca, en este caso, fruits.

console.log(fruits)
console.log(veggies)
console.log(food)

/*


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

*/