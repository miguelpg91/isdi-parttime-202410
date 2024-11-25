// Asigna React.Component a la constante Component para usarla de forma abreviada
const Component = React.Component

///APP.JSX contiene el componente raíz que gestiona la lógica de la interfaz.

class App extends Component {
    constructor(props) {
        console.log("App -> constructor")

        super(props)    //// Llama al constructor de la clase padre (Component) y pasa las props ????

        this.state = { view: "landing" }
    }

    // El método render define lo que se mostrará en pantalla

    render() {
        console.log("App -> render")
        //  fragmento de React, una envoltura que permite agrupar múltiples elementos sin crear un nodo DOM adicional.
        //return dentro de render() define el HTML/JSX que se mostrará en la interfaz
        return <>
            <h1>Hola, App!</h1>

            {this.state.view === "landing" && <Landing onRegisterClicked={() => this.setState({ view: "register" })} onLoginClicked={() => this.setState({ view: "login" })} />}
            {this.state.view === "login" && <Login onRegisterClicked={() => this.setState({ view: "register" })} onUserLoggedIn={() => this.setState({ view: "home" })} />}
            {this.state.view === "register" && <Register onLoginClicked={() => this.setState({ view: "login" })} onUserRegistered={() => this.setState({ view: "login" })} />}
            {this.state.view === "home" && <Home onUserLoggedOut={() => this.setState({ view: "login" })} />}
        </>
    }
}



// LNEA 21: Pasa una función como prop onRegisterClicked; cambia el estado "view" a "register" cuando se hace clic en el botón de registro
// LNEA 21: Pasa una función como prop onLoginClicked; cambia el estado "view" a "login" cuando se hace clic en el botón de inicio de sesión
// LNEA 21: "Landing" es el nombre del componente
//  onRegisterClicked y onLoginClicked son funciones que le indican al componente qué hacer cuando ocurren ciertos eventos (en este caso, clics en los botones).

// LNEA 22: Si el estado "view" es "login", renderiza el componente Login
// LNEA 22: Pasa una función como prop onUserLoggedIn; cambia "view" a "home" cuando el usuario inicia sesión

// LNEA 23: Si el estado "view" es "register", renderiza el componente Register
// LNEA 23: Pasa una función como prop onUserRegistered; cambia "view" a "login" cuando el usuario se registra correctamente

// LNEA 24: Si el estado "view" es "home", renderiza el componente Home
// LNEA 24: Pasa una función como prop onUserLoggedOut; cambia "view" a "login" cuando el usuario cierra sesión