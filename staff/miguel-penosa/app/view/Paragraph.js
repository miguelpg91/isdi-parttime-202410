class Paragraph extends Component {
    constructor() {
        super(document.createElement('p'))
    }

    setText(text) {
        this.container.innerText = text
    }
}


/*Paragraph es una subclase de Component que genera un elemento <p> y permite establecer su texto mediante setText.*/