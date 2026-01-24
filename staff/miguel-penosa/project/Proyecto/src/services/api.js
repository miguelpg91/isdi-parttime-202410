

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";


///ENDPOINTS

export async function registerUser(formData) {
    const res = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    if (!res.ok) throw new Error("Error en registro")
    return await res.json()
}



export async function loginUser({ email, password }) {              //// Tomas un objeto JavaScript con los datos del post
    const res = await fetch(`${API_URL}/api/users/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },        //  Para que lea el JSON
        body: JSON.stringify({ email, password })               ////  Lo conviertes a texto JSON para enviarlo al servidor
    })
    if (!res.ok) throw new Error("Error en login")
    return await res.json()                                     ////  conviertes ese JSON de vuelta a un objeto JavaScript    
}



export async function createPost(postData) {
    const res = await fetch(`${API_URL}/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",    /// Le dices al servidor qué tipo de datos vas a enviar: JSON
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)                      /// Convierte un objeto JavaScript en texto JSON
    })
    if (!res.ok) throw new Error("Error creando el post")
    return await res.json()
}


export async function getPosts() {
    const res = await fetch(`${API_URL}/api/posts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    if (!res.ok) throw new Error("Error obteniendo los posts")
    return await res.json()
}

export async function deletePost(id) {
    const token = localStorage.getItem("token")
    const res = await fetch(`${API_URL}/api/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    if (!res.ok) throw new Error("Error borrando post")
    return await res.json()
}

export async function editPost(id, formData) {
    const token = localStorage.getItem("token")
    const res = await fetch(`${API_URL}/api/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify(formData)
    })
    if (!res.ok) throw new Error("Error editando post")
    return await res.json()
}




// ---- BUSCAR ----

export async function searchPost({ tipo, ciudad, precio }) {
    const params = new URLSearchParams();                       ///herramienta para construir esto: ?tipo=xxx&ciudad=yyy&precio=zzz    :    ? inicia filtros
    if (tipo) params.append("tipo", tipo);
    if (ciudad) params.append("ciudad", ciudad);                /// Si existe ciudad, lo añade a la URL
    if (precio) params.append("precio", precio);

    const res = await fetch(`${API_URL}/api/posts/search?${params.toString()}`, {       ///.toString : Porque fetch no entiende objetos, solo texto: "tipo=rústico&ciudad=Valencia"
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error("Error buscando terrenos");
    return await res.json();
}

/// Se hace la solicitud (fetch) y el código se "pausa" con await hasta que obtenga la respuesta.

/// Se convierte la respuesta a JSON usando res.json(), y de nuevo el código se "pausa" con await hasta obtener el resultado.

/// Se manda al ROUTERS  : Express automáticamente convierte la cadena JSON en un objeto JavaScript

//toString() es para URLs, stringify() es para body