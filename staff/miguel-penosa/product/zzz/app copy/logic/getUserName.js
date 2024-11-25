(function () {
    function getUserName() {
        var users = JSON.parse(localStorage.users)      // Recupera la lista de usuarios almacenada en `localStorage` y la convierte de una cadena JSON a un array de objetos.

        var user = users.find(funtion(user){
            return user.id === sessionStorage.userId    // Busca en el array de `users` el usuario que coincida con el ID almacenado en `sessionStorage.userId`.
        })

        if (!user) throw new Error("user not found");        // (si `user` es `undefined`), lanza un error indicando que no se encontró al usuario.


        return user.name;       // Devuelve el nombre del usuario encontrado.
    }

    logic.getUserName = getUserName
})()   ///???   ; / Asigna la función `getUserName` al objeto global `logic`


//El objeto logic es un contenedor donde se agrupan funciones de lógica, como getUserName,
// para organizar mejor el código y evitar conflictos de nombres en el ámbito global.