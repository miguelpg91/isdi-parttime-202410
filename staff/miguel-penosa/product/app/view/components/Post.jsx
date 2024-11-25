const Component = React.Component

class Post extends Component {
    constructor(props) {
        console.log("Post -> Constructor")

        super(props)    //??? QUE ES PROPS
    }

    render() {
        console.log("Post -> render")

        return <article>
            <h3>{this.props.post.author.username}</h3>

            <img src={this.props.post.image} />

            <p>{this.props.post.text}</p>

            <time>{this.props.post.date}</time>

            {this.props.post.own && <button type="button" onClick={() => {
                if (confirm("Delete post?"))
                    try {
                        logic.deletePost(this.props.post.id)

                        this.props.onPostDeleted()
                    } catch (error) {
                        alert(error.message)

                        console.error(error)
                    }
            }}>🗑️</button>}
        </article>
    }
}

///LINEA 7 props que son? , 14 this.props.post.author.username, 22 props.post.own, 28 para que sirven los argumentos (error) realmente


/*confirm: Una función nativa de JavaScript que muestra un cuadro de diálogo con un mensaje
 y dos opciones: Aceptar o Cancelar. */

//this.props.post.author.username extrae el nombre de usuario del autor del post que el componente recibió como propiedad.