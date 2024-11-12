function logoutUser() {       // Definimos la función logoutUser para cerrar sesión
    delete sessionStorage.userId        // Elimina la propiedad userId de sessionStorage  //// Esto cierra la sesión del usuario eliminando su ID de sesión
}

logic.logoutUser = logoutUser
