logic.deletePost = postId => {         // Asignamos una función flecha a la propiedad "deletePost" del objeto "logic". //Recibe un parámetro llamado postId
    validate.id(postId, 'postId')       // si postId es inválido, la función podría lanzar un error como este: Error: El parámetro 'postId' no es válido.

    const posts = JSON.parse(localStorage.posts)    // Cargamos la lista de posts almacenados en "localStorage" bajo la clave "posts". Y por lo tanto la pasamos de string a array

    const index = posts.findIndex(post => post.id === postId)   //La condición "post.id === postId" compara el "id" de cada post con el "postId" proporcionado.

    if (index < 0) throw new Error('post not found')    //índice es menor a 0, lo que significa que no se encontró ningún post

    posts.splice(index, 1)    // Eliminamos el post del arreglo "posts" utilizando el método "splice".  // 1= un solo elemento del index(posicion a elimninar)

    localStorage.posts = JSON.stringify(posts)  // Actualizamos el almacenamiento en "localStorage" con la lista de posts modificada.
}

//post representa cada elemento individual del array posts