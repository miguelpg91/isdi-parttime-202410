
//REGISTRA NUEVO USUARIO

function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name type')  // TYPEOF es un operador que devuelve una cadena (string) indicando el tipo de dato: typeof 42; // "number"
    if (name.length < 1) throw new Error('invalid name length')         // Verifica que el nombre tenga al menos 1 carácter

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email length')

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password length')

    var found = users.some(function (user) {                    // usamos metodo some : users.some(function (user)); user es el parametro que creamos nosotros para referirnos a los objetos dentro array users .
        return user.email === email || user.username === username
    })

    if (found)
        throw new Error('user already exists')       // Si se encuentra un usuario existente, lanza un error

    var user = {}
    user.id = uuid()        // Asigna un ID único al usuario
    user.name = name        // Asigna los datos del usuario al objeto
    user.email = email
    user.username = username
    user.password = password

    users.push(user)        // Añade el nuevo usuario al array de usuarios

    localStorage.setItem('users', JSON.stringify(users)); ////LINEA AÑADIDA
}

function loginUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password length')

    var users = JSON.parse(localStorage.users)           // Obtiene la lista de usuarios desde localStorage y la convierte en objeto  //    localStorage: permanecen hasta que el usuario los elimine manualmente o se borre el almacenamiento del navegador. 

    var user = users.find(function (user) {
        return user.username === username && user.password === password     // Busca un usuario con el nombre de usuario y la contraseña proporcionados
    })

    if (!user)
        throw new Error('wrong credentials')

    sessionStorage.userId = user.id          // Guarda el ID del usuario en sessionStorage para indicar que ha iniciado sesión
}


function isUserLoggedIn() {                  // Devuelve verdadero si hay un usuario logueado (si userId está en sessionStorage)
    return !!sessionStorage.userId           //El operador !! convierte el valor de sessionStorage.userId a un valor booleano. ; verifica si existe un userId almacenado en el objeto sessionStorage: duran solo mientras la pestaña del navegador esté abierta
}

///getUserName.js

function getUserName() {
    var users = JSON.parse(localStorage.users)          ///???

    var user = users.find(function (user) {
        return user.id === sessionStorage.userId
    })

    if (!user) throw new Error('user not found')

    return user.name
}