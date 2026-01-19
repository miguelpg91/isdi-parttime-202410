class CredentialsError extends Error {
    constructor(message) {      //es obligatorio al heredar
        super(message)          //  es obligatorio al heredar
    }
}

export default CredentialsError


/*


class → define un molde

DuplicityError → nombre del molde

extends Error → hereda de la clase nativa Error

Error → clase base creada por JavaScript



class Hijo extends Padre    →   El hijo hereda métodos y propiedades del padre



throw new DuplicityError("Usuario duplicado")   →   new = crea una instancia


*/


/*

-Error: 

Es una clase nativa de JavaScript
Es el molde base de todos los errores

-CredentialsError

Es TU clase
Es un molde que hereda de Error


-Instancia 

new CredentialsError("Credenciales incorrectas")

*/ 