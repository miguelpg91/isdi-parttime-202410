///HOME///

var homeView = document.createElement('main')

//////// Verifica si el usuario ha iniciado sesión usando ////////////

if (isUserLoggedIn())                       ///isUserLoggedIn : LOGIC.JS;     (logic.isUserLoggedIn())   
    body.appendChild(homeView)          ///// Si el usuario ha iniciado sesión (determinando con `isUserLoggedIn()`), añade `homeView` al cuerpo de la página (`body`).

var homeTitle = document.createElement('h2')
homeTitle.innerText = 'Home'
homeView.appendChild(homeTitle)

var homeUser = document.createElement('h3')
homeUser.innerText = 'Hello, User!'             ///porque este texto si luego linea 18????
homeView.appendChild(homeUser)

////// Si el usuario ha iniciado sesión, obtiene su nombre con `getUserName()`////////////

if (isUserLoggedIn()) {      //Devuelve verdadero si hay un usuario logueado (si userId está en sessionStorage); logic.isUserLoggedIn())
    var name = logic.getUserName()

    homeUser.innerText = 'Hello, ' + name + '!'    ///AÑADIDO () EN GETUSERNAME; var name = logic.getUserName
}

// Si el usuario ha iniciado sesión, obtiene su nombre mediante `getUserName()` y actualiza el texto del saludo para personalizarlo.

var homeLogoutButton = document.createElement('button')
homeLogoutButton.innerText = 'Logout'
homeView.appendChild(homeLogoutButton)

homeLogoutButton.onclick = function () {        // Crea un botón con el texto "Logout" para cerrar sesión y lo añade a `homeView`.
    logoutUser()        ///logic.logoutUser()?

    body.removeChild(homeView)
    body.appendChild(loginView)
}

var homeAddPostButton = document.createElement('button')
homeAddPostButton.innerText = '+'
homeView.appendChild(homeAddPostButton)                     // Crea un botón "+" para añadir una nueva publicación y lo añade a `homeView`.

homeAddPostButton.onclick = function () {
    homeView.removeChild(homePosts)
    homeView.appendChild(homeCreatePost)
}

var homePosts = document.createElement('section')
homeView.appendChild(homePosts)

////// Si el usuario está logueado, obtiene y muestra todas las publicaciones guardadas//////

if (isUserLoggedIn()) {         //(logic.isUserLoggedIn())
    var posts = getPosts()      //var posts = logic.getPosts()

    homePosts.innerHTML = ''

    posts.forEach(function (post) {
        var homePost = document.createElement('article')
        homePosts.appendChild(homePost)

        var postAuthor = document.createElement('h3')
        postAuthor.innerText = post.author
        homePost.appendChild(postAuthor)

        var postImage = document.createElement('img')
        postImage.src = post.image
        homePost.appendChild(postImage)

        var postText = document.createElement('p')
        postText.innerText = post.text
        homePost.appendChild(postText)

        var postDate = document.createElement('time')
        postDate.innerText = post.date
        homePost.appendChild(postDate)
    })
}

var homeCreatePost = document.createElement('section')

var homeCreatePostTitle = document.createElement('h3')
homeCreatePostTitle.innerText = 'Create Post'
homeCreatePost.appendChild(homeCreatePostTitle)

var homeCreatePostForm = document.createElement('form')
homeCreatePost.appendChild(homeCreatePostForm)

var homeCreatePostImageLabel = document.createElement('label')
homeCreatePostImageLabel.innerText = 'Image'
homeCreatePostImageLabel.htmlFor = 'image'
homeCreatePostForm.appendChild(homeCreatePostImageLabel)

var homeCreatePostImageInput = document.createElement('input')
homeCreatePostImageInput.type = 'url'
homeCreatePostImageInput.id = 'image'
homeCreatePostForm.appendChild(homeCreatePostImageInput)

var homeCreatePostTextLabel = document.createElement('label')
homeCreatePostTextLabel.innerText = 'Text'
homeCreatePostTextLabel.htmlFor = 'text'
homeCreatePostForm.appendChild(homeCreatePostTextLabel)

var homeCreatePostTextInput = document.createElement('input')
homeCreatePostTextInput.type = 'text'
homeCreatePostTextInput.id = 'text'
homeCreatePostForm.appendChild(homeCreatePostTextInput)

var homeCreatePostSubmitButton = document.createElement('button')
homeCreatePostSubmitButton.innerText = 'Create'
homeCreatePostSubmitButton.type = 'submit'
homeCreatePostForm.appendChild(homeCreatePostSubmitButton)

//// Función que maneja el envío del formulario

homeCreatePostForm.onsubmit = function (event) {
    event.preventDefault()

    var image = homeCreatePostImageInput.value
    var text = homeCreatePostTextInput.value

    try {
        createPost(image, text)

        homeCreatePostForm.reset()

        homeView.removeChild(homeCreatePost)
        homeView.appendChild(homePosts)

        var posts = getPosts()

        homePosts.innerHTML = ''

        posts.forEach(function (post) {
            var homePost = document.createElement('article')
            homePosts.appendChild(homePost)

            var postAuthor = document.createElement('h3')
            postAuthor.innerText = post.author
            homePost.appendChild(postAuthor)

            var postImage = document.createElement('img')
            postImage.src = post.image
            homePost.appendChild(postImage)

            var postText = document.createElement('p')
            postText.innerText = post.text
            homePost.appendChild(postText)

            var postDate = document.createElement('time')
            postDate.innerText = post.date
            homePost.appendChild(postDate)
        })
    } catch (error) {
        alert(error.message)

        console.error(error)
    }
}