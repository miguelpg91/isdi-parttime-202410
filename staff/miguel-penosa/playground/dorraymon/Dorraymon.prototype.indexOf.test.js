function () {
    this.length = 0;
}

Dorraymon.prototype.indexOf = function (element) {     //element. Este parámetro representa el valor que queremos buscar = "Alien"
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {      //Verifica si el elemento actual (this[i]) es igual al element que estamos buscando.
            return i;              // Devuelve el índice donde se encuentra el elemento
        }
    } return -1;
}

/*indexOf(): Devuelve el primer índice donde se encuentra un elemento, o -1 si no se encuentra.

Ejemplo: arr.indexOf(2) devuelve el índice de 2 en arr, o -1 si no está.*/