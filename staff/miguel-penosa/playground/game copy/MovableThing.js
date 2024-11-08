
class MovableThing extends Thing {          //QUE ES THING???
    constructor(container) {
        super(container)

        const STEP = 10     // Define el tamaño del paso de movimiento en píxeles

        //Constructor (asignación inicial de teclas):

        this.upKey = 'ArrowUp'
        this.downKey = 'ArrowDown'
        this.leftKey = 'ArrowLeft'
        this.rightKey = 'ArrowRight'



        //Este bloque agrega un evento de escucha de teclado (keydown) al documento. 
        //Cada vez que se presiona una tecla, se ejecuta una función que:

        document.addEventListener('keydown', event => {
            if (event.key === this.upKey)               // Usa event.key para ver qué tecla fue presionada y la compara con this.upKey, this.downKey, this.leftKey, y this.rightKey.
                this.moveY(-STEP)                           // Mueve el objeto hacia arriba restando STEP en el eje Y
            else if (event.key === this.downKey)
                this.moveY(STEP)
            else if (event.key === this.leftKey)
                this.moveX(-STEP)
            else if (event.key === this.rightKey)
                this.moveX(STEP)
        })
    }

    setKeys(upKey, downKey, leftKey, rightKey) {      //Método setKeys (personalización de teclas después de la creación):
        this.upKey = upKey
        this.downKey = downKey
        this.leftKey = leftKey
        this.rightKey = rightKey
    }
}

/*
Define la clase MovableThing, que extiende (hereda) de la clase Thing. 
Esto significa que MovableThing tiene todas las propiedades 
y métodos de Thing y puede agregar o modificar funcionalidades.*/
