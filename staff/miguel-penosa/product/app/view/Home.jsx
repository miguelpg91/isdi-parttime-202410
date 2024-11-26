const Component = React.Component

class Home extends Component {
    constructor(props) {
        console.log('Home -> constructor')

        super(props)

        this.state = { name: null, view: 'posts' }
    }

    componentDidMount() {
        console.log('Home -> componentDidMount')

        try {
            const name = logic.getUserName()

            this.setState({ name })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    render() {
        console.log('Home -> render')

        return <main>
            <h2>Home</h2>

            <h3>Hello, {this.state.name}!</h3>

            <button type="button" onClick={() => {
                try {
                    logic.logoutUser()

                    this.props.onUserLoggedOut()    ///para notificar al componente padre que el usuario ha cerrado sesión.
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }}>Logout</button>

            <button type="button" onClick={() => this.setState({ view: 'create-post' })}>+</button>

            {this.state.view === 'posts' && <Posts />}
            {this.state.view === 'create-post' && <CreatePost onPostCreated={() => this.setState({ view: 'posts' })} />}
        </main>
    }
}

/// LINEA 46 "+" cambia la vista del componente (view) a 'create-post'
/// componentDidMount = Intenta obtener el nombre del usuario con logic.getUserName() y actualiza el estado name usando this.setState({ name }).
/// el callback es la función this.props.onUserLoggedOut, y se utiliza para ejecutar una acción cuando el usuario cierra sesión.
/// el callback le dice al componente padre que el usuario se ha deslogueado, y el padre puede tomar la acción correspondiente, como cambiar la vista a la pantalla de login.