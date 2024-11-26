logic.createPost = (image, text) => {
    if (typeof image !== "string") throw new Error("invalid image type")
    if (typeof text !== "string") throw new Error("invalid text type")

    const posts = JSON.parse(localStorage.posts)

    // Crea un nuevo objeto `post` con las siguientes propiedades:

    const post = {
        id: uuid(),
        author: sessionStorage.userId,  /// el ID del usuario logueado, almacenado en `sessionStorage`??
        image,
        text,
        date: new Date().toISOString()   ///la fecha y hora actuales en formato ISO.
    }

    posts.push(post)        // Añade el nuevo `post` al array de `posts`.

    localStorage.posts = JSON.stringify(posts)   ///// Convierte el array `posts` nuevamente a una cadena JSON y lo guarda en `localStorage`
}


/*

var validate = (function () {
    // ...
})();

*/ 