// Define la función `loginUser`, que autentica al usuario con su `username` y `password`.
var logic = {};
(function () {
    function loginUser(username, password) {
        validate.username(username);  //validate parece ser un objeto que contiene funciones para verificar que los datos de entrada, como username y password, cumplan con ciertos criterios 
        validate.password(password);

        var users = JSON.parse(localStorage.getItem('users')) || [];  ///cual es la formula estandard de localstorage

        var user = users.find(function (user) {
            return user.username === username && user.password === password;
        });

        if (!user)
            throw new Error('wrong credentials');

        sessionStorage.userId = user.id;
    }

    logic.loginUser = loginUser;
})();

/*

La fórmula básica para trabajar con datos en localStorage sigue dos pasos clave: 
guardar y recuperar datos.
En tu ejemplo, la fórmula se usa para recuperar un valor almacenado y
convertirlo de JSON a un objeto en JavaScript.

Almacenar:

var users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
localStorage.setItem("users", JSON.stringify(users));

Recuperar: 

var users = JSON.parse(localStorage.getItem("users"));
