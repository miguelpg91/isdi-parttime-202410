logic.logoutUser = () => { return delete sessionStorage.userId }      //FUNCION ANONIMA: Ya que no requiere volver a ser utilizada y por lo tanto se hace una funcion como "desechable"

//función que elimina el userId de sessionStorage, lo que efectivamente cierra la sesión del usuario.

/*
Diferencias:

- function registerUser(...) { ... }: Se declara y define una función.

- logic.logoutUser = () => { ... }: Estás asignando una función anónima a una propiedad del objeto logic.

*/
