import authenticateUser from "./authenticateUser"   //Llama a authenticateUser con un nombre de usuario y contraseña de prueba.

try {
    const userId = authenticateUser("zanahoria", "123123123")   //Si las credenciales son válidas, imprime el ID del usuario

    console.log(userId)     // Muestra el ID del usuario si la autenticación es exitosa

} catch (error) {
    console.error(error)
}