
(function () {
    function getPosts() {
        var users = JSON.parse(localStorage.users)      // Convierte los datos de usuarios de JSON en un array.
        var posts = JSON.parse(localStorage.posts)

        posts.forEach(function (post) {             //forEach recorre cada post del array posts. Por cada post ejecuta la función (function(post) { ... }),
            var authorId = post.author              // // Extrae el ID del autor del post.

            var user = users.find(function (user) {     // Busca al usuario cuyo `id` coincide con `authorId`.
                return user.id === authorId
            })

            var username = user.username                // Obtiene el nombre de usuario del autor encontrado.

            post.author = {                             //????
                id: authorId,
                username: username
            }
        })

        return posts.reverse()                  // Invierte el orden de los posts y los devuelve.
    }

    logic.getPosts = getPosts       // Añade `getPosts` al objeto `logic` para que esté disponible globalmente. ??
})()                                // Ejecuta la IIFE inmediatamente.  ??