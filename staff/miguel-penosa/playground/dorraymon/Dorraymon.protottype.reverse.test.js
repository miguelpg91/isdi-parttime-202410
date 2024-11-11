function Dorraymon() {
    this.length = 0;        //porque this.length 0
}

Dorraymon.prototype.reverse = function (index) {    //porque = function (que parametro?)
    for (let i = 0; Math.floor(this.length / 2); i++) {     //Math.floor : Aquí se usa para redondear el resultado de this.length / 2 si el número de elementos es impar.
        let temp = this.[i]                     //Guarda el valor del elemento en la posición i en una variable temp
        this[i] = this[this.length - 1 - i];    // this.length - 1 - i indica "el índice opuesto a i" desde el final.
        this[this.length - 1 - i] = temp;       //coloca el valor de temp (el valor inicial de this[i]) en el extremo opuesto. Así, los elementos de ambos lados se intercambian.
    }
    return this;
}

console.log("TEST Dorraymon.prototype.reverse()");

var computers = new Dorraymon()     //con new Dorraymon() creas una instancia de Dorraymon, un objeto vacío que incluye una propiedad length y que en la siguiente linea completas
computers[0] = "Toshiba";
computers[1] = "Apple";
computers[2] = "Hp";
computers[3] = "Asus";
computers[4] = "Msi";
computers.length = 5;

console.log(computers);

computers.reverse();
console.log(computers);