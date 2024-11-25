//La abstracción de componentes es el diseño de componentes reutilizables y autónomos que ocultan sus detalles internos

class Heading extends Component {
    constructor(level) {
        super(document.createElement(`h${level}`))
    }

    setText(text) {
        this.container.innerText = text
    }
}

