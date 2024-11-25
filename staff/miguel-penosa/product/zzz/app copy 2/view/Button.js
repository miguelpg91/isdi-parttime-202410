class Button extends Component {
    constructor(type) {
        super(document.createElement('button'))     //type="button": El botón no hace nada automáticamente, es solo un botón.

        this.container.type = type //???
    }

    setText(text) {
        this.container.innerText = text
    }
}