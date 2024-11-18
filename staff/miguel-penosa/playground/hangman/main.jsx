// 1. Configuración de React y punto de montaje en el DOM
const root = ReactDOM.createRoot(document.querySelector("#root"))

const Component = React.Component
//Constructor: Inicializa el componente y establece el estado inicial
class App extends Component {
    constructor(props) {
        super(props)    // Llama al constructor de la clase base (React.Component)

        this.state = {
            feedback: null, // Inicializa `feedback` en null para indicar que aún no hay resultado
            assertions: []  //array vacío para almacenar las letras acertadas.
        }
    }
    // Muestra el contenido visual del componente
    render() {

        const feedbackStyle = {
            backgroundColor: this.state.feedback === "asserted" ? "green" :
                this.state.feedback === "failed" ? "red" : "transparent",
            color: "gold",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
        };
        // main extrae la letra ingresada y verifica si está en la palabra a adivinar

        return <main>
            <h1 style={{ backgroundColor: "tomato", color: "gold" }}>Hangman</h1>

            <form onSubmit={
                event => {
                    event.preventDefault()
                    // Extrae la letra ingresada y verifica si está en la palabra a adivinar
                    const form = event.target
                    const input = form.char
                    const char = input.value    // Extrae el valor del input `char`.
                    form.reset()

                    const word = this.props.guess       // Obtiene la palabra a adivinar desde las props.
                    const index = word.indexOf(char)    // Busca el índice de la letra ingresada en la palabra.
                    // Si la letra no está en la palabra:
                    if (index < 0)
                        this.setState({ feedback: "failed" })
                    else {
                        //const assertions = [...this.state.assertions]
                        const assertions = this.state.assertions.concat()

                        assertions[index] = char

                        this.setState({ feedback: "asserted", assertions })
                    }
                }
            }>
                <label htmlFor="char">Char</label>
                <input type="text" id="char" />
                <button type="submit">Try</button>
            </form>

            <p>{this.props.player}: <span style={feedbackStyle}>{this.state.feedback}</span></p>
            <p>assertions: {this.state.assertions.join("")}</p>
        </main>
    }
}
// Renderización del Componente Principal en el Contenedor `root`
root.render(<App player="Miguel" guess={"murcielago"} />)