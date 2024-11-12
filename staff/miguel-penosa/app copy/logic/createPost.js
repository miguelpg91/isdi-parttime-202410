(function () {
    function createPost(iamge, text) {
        if (typeof image !== "string") throw new Error("invalid image type")
        if (typeof text !== "string") throw new Error("invalid text type")

        var posts = JSON.parse(localStorage.posts)

        // Crea un nuevo objeto `post` con las siguientes propiedades:

        var post = {
            id: uuid(),
            author: sessionStorage.userId,  /// el ID del usuario logueado, almacenado en `sessionStorage`??
            image: image,
            text: text,
            date: new Date().toISOString()   ///la fecha y hora actuales en formato ISO.
        }

        posts.push(post)        // Añade el nuevo `post` al array de `posts`.

        localStorage.posts = JSON.stringify(posts)   ///// Convierte el array `posts` nuevamente a una cadena JSON y lo guarda en `localStorage`
    }

    logic.createPost = createPost  /// Asigna la función `createPost` al objeto `logic`, de modo que esté disponible globalmente en `logic`.
})()