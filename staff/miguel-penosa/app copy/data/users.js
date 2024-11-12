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


localStorage.users = JSON.stringify(users)   // Almacena el array de usuarios en localStorage como una cadena de texto JSON

