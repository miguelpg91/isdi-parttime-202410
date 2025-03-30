export function registerUser(email, password) {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    return { success: true, message: "Usuario registrado correctamente" };
}

export function loginUser(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
        return { success: false, message: "No hay usuario registrado" };
    }
    if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("token", "fake-jwt-token");
        return { success: true, message: "Login exitoso" };
    } else {
        return { success: false, message: "Credenciales incorrectas" };
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
}