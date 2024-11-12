function isUserLoggedIn() {          //`isUserLoggedIn`, que verifica si hay un usuario actualmente logueado.
    return !!sessionStorage.userId   //El doble operador `!!` convierte `sessionStorage.userId` en un valor booleano (true/false).
}

///logic.isUserLoggedIn = isUserLoggedIn ??? que es userloggedin