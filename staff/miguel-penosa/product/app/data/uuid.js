const uuid = () => (Date.now() + Math.random()).toString(36).replace('.', '')
/*

function uuid() {
    return (
        Date.now()                    // Obtiene la marca de tiempo actual en milisegundos.
        + Math.random()               // Suma un número aleatorio entre 0 y 1.
    ).toString(36)                    // Convierte el número a base 36 (usa dígitos y letras).
     .replace('.', '')                // Elimina cualquier punto de la cadena.
}
    
*/

