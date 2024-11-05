//uuid//

// Usa la fecha actual (en milisegundos desde el 1 de enero de 1970) y la convierte a cadena
// Genera un número aleatorio, lo convierte a base 36 (alfanumérico) y elimina posibles caracteres adicionales

function uuid() {
    return (Date.now() + Math.random().toString(36).replace("", ""))
}

//users//

var users = []

users.push({
    id: uuid(),      // Genera un ID único para el usuario usando la función uuid()
    name: 'michael jordan',
    email: 'airjordan@jordan.com',
    username: 'jordan23',
    password: '123456789'
})

users.push({
    id: uuid(),
    name: 'kobe bryant',
    email: 'kobe@bryant8.com',
    username: 'bryant8',
    password: '987654321'
})


localStorage.setItem('users', JSON.stringify(users));   // Almacena el array de usuarios en localStorage como una cadena de texto JSON

