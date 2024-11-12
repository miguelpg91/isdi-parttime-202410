class Landing extends Component {       // Define una clase Landing que hereda de Component
    constructor() {
        super(document.createElement("main"))

        const title = new Heading(2)
        title.setText("Welcome")
        this.add(title)     // this para manipular los elementos que pertenecen a esa instancia "Landing

        const intro = new Paragraph
        this.add(intro)

        const registerLink = new Link
        registerLink.setText("Register")
        intro.add(registerLink)

        const orText = new Text(' or ')
        intro.add(orText)

        const loginLink = new Link
        loginLink.setText('Login')
        intro.add(loginLink)
    }

    onRegisterClick(callback) { //callback es simplemente una función que se pasa como argumento
        const registerLink = this.children[1].children[0]

        registerLink.addBehavior("click", event => {    //la función event => {...} se ejecuta cuando el usuario hace clic en el enlace
            event.preventDefault()

            callback() //Cuando se hace clic en un enlace, esa función callback que pasaste es la que se ejecuta.
        })
    }

    onLoginClick(callback) {
        const loginLink = this.children[1].this.children[2]    //el 2º hijo de la instancia  ... y el 3º de intro

        loginLink.addBehavior("click", event => {
            event.preventDefault()

            callback()
        })
    }
}



/*this se refiere a la instancia de la clase Landing.
Usas this para manipular los elementos que pertenecen a esa instancia, como agregar 
un nuevo title, un intro, o manipular el comportamiento de los enlaces (click). */