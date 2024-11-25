const Component = React.Component

class Register extends Component {
    constructor(props) {
        console.log("Register -> constructor")  //cuando se muestra Register o cuando cambia su contenido (por un cambio de estado o propiedades), este mensaje aparece en la consola para indicar que render se ha ejecutado.

        super(props)
    }

    render() {
        console.log("Register -> render")

        return <main>
            <h2>Register</h2>

            <form onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const name = form.name.value
                const email = form.email.value
                const username = form.username.value
                const password = form.password.value

                try {
                    logic.registerUser(name, email, username, password)

                    form.reset()

                    this.props.onUserRegistered()
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button type="submit">Register</button>
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClicked()
            }}>Login</a>
        </main>
    }
}

///event es un objeto de evento que se genera automáticamente cuando ocurre una acción en el navegador, en este caso, el envío del formulario
///event.target: Hace referencia al elemento que originó el evento; aquí, event.target es el formulario mismo (<form>). A través de él, se accede a los valores de cada campo (nombre, email, usuario, contraseña).
/// LINEA 38 - estructura visual del formulario
