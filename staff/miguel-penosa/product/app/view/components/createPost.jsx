const Component = React.Component

class CreatePost extends Component {
    constructor(props) {
        console.log('CreatePost -> constructor')

        super(props)
    }

    render() {
        console.log('CreatePost -> render')

        return <section>
            <h3>Create Post</h3>

            <form onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const image = form.image.value
                const text = form.text.value

                try {
                    logic.createPost(image, text)

                    this.props.onPostCreated()
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }

            }}>
                <label for="image">Image</label>
                <input type="url" id="image" />

                <label for="text">Text</label>
                <input type="text" id="text" />

                <button type="submit">Create</button>
            </form>
        </section>
    }
}

///<section> Es el inicio del contenido que será renderizado, envuelto dentro de una etiqueta section.

///onSubmit={event => { ... }} Define un manejador para el evento submit

//event.target Obtiene el formulario enviado a través de event.target

/*
const image = form.image.value
const text = form.text.value
Descripción: Accede a los valores de los campos del formulario (image y text) a través de sus atributos id="image" y "text"
*/


//logic.createPost(image, text): Llama a una función externa para crear un post con los valores ingresados.

