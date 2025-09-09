//Este código es el primer paso para enviar los datos recogidos al backend y el ultimo ya que los devuelve a los componentes

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";    // ??


// ---- REGISTRO ----

export async function registerUser(nombre, email, password) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password })
    })
    if (!res.ok) throw new Error("Error en registro")
    return await res.json()
}


// ---- LOGIN ----

export async function loginUser(email, password) {              //// Tomas un objeto JavaScript con los datos del post
    const res = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },        //  Para que lea el JSON
        body: JSON.stringify({ email, password })               ////  Lo conviertes a texto JSON para enviarlo al servidor
    })
    if (!res.ok) throw new Error("Error en login")
    return await res.json()                                     ////  conviertes ese JSON de vuelta a un objeto JavaScript    
}

// ---- POSTS ----

export async function createPost(tipo, ciudad, precio, text, userId) {
    const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, ciudad, precio, text, author: userId })
    })
    if (!res.ok) throw new Error("Error creando el post")
    return await res.json()
}



// ---- BUSCAR ----

export async function searchLands(tipo, ciudad, precio) {
    const res = await fetch(`${API_URL}/search`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, ciudad, precio })
    })
    if (!res.ok) throw new Error("Error buscando terrenos")
    return await res.json()
}

/// Se hace la solicitud (fetch) y el código se "pausa" con await hasta que obtenga la respuesta.

/// Se convierte la respuesta a JSON usando res.json(), y de nuevo el código se "pausa" con await hasta obtener el resultado.

/// Se manda al ROUTERS  : Express automáticamente convierte la cadena JSON en un objeto JavaScript
