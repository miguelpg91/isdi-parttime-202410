console.log("TEST Dorraymon.prototype.push");

console.log("CASE add movie to cult movies");

function Dorraymon() {
    this.length = 0;
}

// Método personalizado 'push' agregado al prototipo
Dorraymon.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {  // Corregido: usar punto y coma en el for
        var argument = arguments[i];
        this[this.length] = argument;       //??PORQUE THIS THIS.LENGTH
        this.length++;
    }
    return this.length;  // Retorna la nueva longitud
}

var cultmovies = new Dorraymon();
cultmovies[0] = "Goodfellas";
cultmovies[1] = "Godfather";
cultmovies[2] = "Alien";
cultmovies[3] = "Blade Runner";
cultmovies.length = 4;

var length = cultmovies.push("Metal Jacket");
console.log(length);
console.log(cultmovies);

/*
nums.push([1, 2, 3]);    
nums.push([4, 5]);       
nums.push([6]);          
nums.push([]);          
nums.push([7]);         
nums.push([8, 9, 10]);
*/

var length = nums.push([1, 2, 3], [4, 5], [6], [], [7], [8, 9, 10]) //Array de arrays / multidimensional
console.log(nums) //[1, 2, 3], [4, 5], [6], [], [7], [8, 9, 10]
console.log(length) //6
console.log(nums[0][2]) // Salida: 3
console.log("Segundo elemento del primer subarray:", nums[0][1], "y el quinto subarray:", nums[4]) // Salida: 2 y 7