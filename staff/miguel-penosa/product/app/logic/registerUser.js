/// usa el objeto validate para validar los datos de entrada uno por uno, lanzando un error si algún dato no cumple con las reglas de validación
logic.registerUser = (name, email, username, password) => {   //La primera parte maneja el proceso de envío y lógica de lo que sucede al enviar.
    validate.name(name)
    validate.email(email)           ///validate es el objeto.porpiedad de objeto validate( argumento de la funcion en objeto validate);
    validate.username(username)
    validate.password(password)

    const users = JSON.parse(localStorage.users)

    const found = users.some(user => user.email === email || user.username === username)

    if (found)
        throw new Error('user already exists')

    // Si los datos son válidos, se crean y asignan los valores al objeto user

    const user = {}    // Crea un objeto vacío para el nuevo usuario. /// user se usa para guardar y procesar la información de un usuario   
    user.id = uuid()
    user.name = name    //Asigna el valor de la variable name (que contiene el nombre del usuario) a la propiedad name del objeto user.
    user.email = email
    user.username = username
    user.password = password

    users.push(user)                            // Agrega el nuevo usuario al arreglo de usuarios.

    localStorage.users = JSON.stringify(users)     //guardando el objeto users en el almacenamiento local del navegador (localStorage) como una cadena de texto (JSON).
}

