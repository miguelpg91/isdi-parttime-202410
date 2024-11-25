(function () {
    function loginUser(username, password) {
        validate.username(username)     // validate.username(username) y validate.password(password) ya han pasado el filtro de register para llegar hasta aqui PERO SE VUELVE A VALIDAR
        validate.password(password)

        var users = JSON.parse(localStorage.users)      ///Obtiene los usuarios almacenados en localStorage y los convierte de formato JSON a un objeto de JavaScript.

        var user = users.find(function (user) {         ///Busca el usuario en la lista users que coincida exactamente con el username y password proporcionados.
            return user.username === username && user.password === password     ///username y password se refieren a los parámetros username y password que fueron recibidos como argumentos en la función loginUser
        })

        if (!user)                                   //Si no encuentra user
            throw new Error('wrong credentials')

        sessionStorage.userId = user.id     ///Obtiene los usuarios almacenados en localStorage y los convierte de formato JSON a un objeto de JavaScript.
    }

    logic.loginUser = loginUser     //Asigna la función loginUser al objeto logic para que esté disponible globalmente en
})()


///SI PASO A JS6 FALLA