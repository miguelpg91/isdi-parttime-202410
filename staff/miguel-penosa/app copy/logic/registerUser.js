
function registerUser(name, email, username, password) {        //para registrar un nuevo usuario
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    var users = JSON.parse(localStorage.users)  ///Recuperar y convertir el dato de JSON a objeto JavaScript

    var found = users.some(function (user) {
        return user.email === email || user.username === username   //Retorna verdadero si se encuentra un usuario existente
    })

    if (found)
        throw new Error('user already exists')

    // Crea un nuevo objeto de usuario

    var user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)              // Agrega el nuevo usuario al array de usuarios

    localStorage.users = JSON.stringify(users)      // Almacena el array actualizado de usuarios en localStorage
}                                                   // Convierte el array a una cadena JSON para almacenarlo

logic.registerUser = registerUser
