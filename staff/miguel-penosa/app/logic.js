*/*

function registerUser (name, username, email, password){
    var found = users.some(function (user) {
        return user.email === email || user.username === username
    })

    if (found) {
       throw new Error ("user already exist")
    }
    var user = {}               // // Crea un objeto llamado "user" que contendrá los datos del nuevo usuario
    user.name = name,
        user.email = email,           ///////// Asigna el valor de la variable "email" al campo "email" del objeto
        user.username = username,
        user.password = password

    users.push(user);
}