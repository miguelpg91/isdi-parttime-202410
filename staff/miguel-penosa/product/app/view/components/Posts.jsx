const Component = React.Component

class Posts extends Component {
    constructor(props) {
        console.log("Posts -> constructor")

        super(props)

        this.state = { posts: [] }
    }

    componentDidMount() {
        console.log("Posts -> ComponentDidMount")

        try {
            const posts = logic.getPosts()

            this.setState({ posts })    //Actualiza el estado del componente con la lista de publicaciones obtenidas.
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    render() {
        console.log("Post -> render")

        return <section>
            {this.state.posts.map(post =>
                <Post post={post} onPostDeleted={() => {
                    try {
                        const posts = logic.getPosts()

                        this.setState({ posts })
                    } catch (error) {
                        alert(error.message)

                        console.error(error)
                    }
                }} />
            )}
        </section>
    }

}