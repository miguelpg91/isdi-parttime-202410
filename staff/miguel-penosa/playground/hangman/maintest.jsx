const root = ReactDOM.createRoot(document.querySelector("#root"))    //Selecciona el elemento <div id="root"></div> del HTML.

const Component = React.Component

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feedback: null,
            assertions: []
        }
    }

    render() {

        const feedbackStyle = {
            backgroundColor: this.state.feedback === "asserted" ? "green" : this.state.feedback === "failed" ? "red" : "transparent",
            color: "gold",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
        };


        //estás diciendo que el componente debe renderizar un elemento <main> con su contenido  ///PORQUE DOBLE {{}}

        //el primer par de {} permite insertar JavaScript, mientras que el segundo {} representa el objeto de estilo en sí.
        return <main>
            <h1 style={{ backgroundColor: "tomato", color: "gold" }}>Hangman</h1>

            <form onSubmit={  //es un evento que se activa cuando un formulario se envía.
                event => {     //event es un objeto que describe lo que ocurrió cuando un usuario interactúa (por ejemplo, envía el formulario).
                    event.preventDefault()

                    const form = event.target   // permite acceder a todos los elementos del formulario (input, button, etc.)   ???
                    const input = form.char     // QUE FUNCION CUMPLE?
                    const char = input.value
                    form.reset()

                    const word = this.props.guess
                    const index = word.indexOf(char)

                    if (index < 0) //PORQUE SI ES MENOR A 0 ????
                        this.setState({ feedback: "failed" })        //PORQUE SETSTATE??
                    else {
                        const assertions = this.state.assertions.concat()  //NO ENTEINDO LINEA

                        assertions[index] = char    //tiene algo que ver con LINEA 35

                        this.setState({ feedback: "asserted", assertions })  //PORQUE SETSTATE??
                    }
                }
            }>
                <label htmlFor="char">CHAR</label>
                <input type="text" id="char" />
                <button type="submit">Try</button>
            </form>

            <p>{this.props.player}: <span style={feedbackStyle}>{this.state.feedback}</span></p>
            <p>assertions: {this.state.assertions.join("")}</p>
        </main>
    }
}

root.render(<App player="Miguel" guess={"murcielago"} />)

///<span> para aplicar CSS o manipular por JavaScript











