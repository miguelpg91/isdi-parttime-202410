logic.getPosts = () => {
    var users = JSON.parse(localStorage.users)      // DEFINIDO EN loginUser /// Convierte los datos de usuarios de JSON en un array.
    var posts = JSON.parse(localStorage.posts)

    posts.forEach(post => {           //forEach recorre cada post del array posts. Por cada post ejecuta la función (function(post) { ... }),
        var authorId = post.author              // // Extrae el ID del autor del post.

        const user = users.find(user => user.id === authorId)    // (user) definido en RegisterUser/// Busca al usuario cuyo `id` coincide con `authorId`.

        var username = user.username                // Obtiene el nombre de usuario del autor encontrado.

        post.author = {                             //????
            id: authorId,
            username: username
        }
        post.own = authorId === sessionStorage.userId
    })

    return posts.reverse()                  // Invierte el orden de los posts y los devuelve.
}
