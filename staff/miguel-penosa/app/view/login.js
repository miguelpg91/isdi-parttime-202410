class Login extends Component {
    constructor() {
        super(document.createElement("main"))       //super Permite que Login herede correctamente las propiedades y métodos de Component

        const title = new Heading(2)    // Crea un h2.
        title.setText("Login")          // Establece el texto del título.
        this.add(title)                 // Agrega title directamente a Login

        const form = new Form
        this.add(form)

        // username

        const usernameLabel = new Label("username")
        usernameLabel.setText("Username")
        form.add(usernameLabel)     // Agrega la etiqueta al formulario.

        const usernameInput = new Input('text', 'username')
        form.add(usernameInput)     // Agrega el campo al formulario.

        // password

        const passwordLabel = new Label('password')
        passwordLabel.setText('Password')
        form.add(passwordLabel)

        const passwordInput = new Input('password', 'password')
        form.add(passwordInput)

        const submitButton = new Button('submit')
        submitButton.setText('Login')
        form.add(submitButton)

        const registerLink = new Link
        registerLink.setText('Register')
        this.add(registerLink)
    }

    onRegisterClick(callback) {
        const registerLink = this.children[2]   //El tercer hijo directo(this.add) de Login (registerLink) 

        registerLink.addBehavior("click", event => {     // Agrega un comportamiento al hacer clic.
            event.preventDefault()

            callback()
        })
    }

    onLoggedIn(callback) {
        const form = this.children[1]

        form.addBehavior("submit", event => {
            event.preventDefault()

            const usernameInput = form.children[1]
            const passwordInput = form.children[3]

            const username = usernameInput.getValue()
            const password = passwordInput.getValue()

            try {
                logic.loginUser(username, password)

                form.clear()

                callback()

            } catch (error) {
                alert(error.message)

                console.error(error)


            }
        })

    }
}