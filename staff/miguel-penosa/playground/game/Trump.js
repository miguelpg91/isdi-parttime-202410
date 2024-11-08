
function Trump() {
    Thing.call(this, document.createElement('div'))

    // Define el tamaño del objeto 'Trump' (70px de ancho y 140px de alto)

    this.setSize(300, 300)

    var trumpFaceImage = document.createElement("img")
    trumpFaceImage.src = "images/donkeykong.png"              // Establece la fuente de la imagen
    trumpFaceImage.style.width = "300px"                  // Define el ancho de la imagen a 50px
    trumpFaceImage.style.position = "absolute"           // Posiciona la imagen de forma absoluta en su contenedor
    trumpFaceImage.style.zIndex = 1                      // Los elementos con un zIndex más alto aparecen delante de los elementos con un zIndex más bajo.
    trumpFaceImage.style.left = "20px"                   // Coloca la imagen 20px desde la izquierda de su contenedor
    trumpFaceImage.style.top = "18px"                    // Coloca la imagen 18px desde la parte superior de su contenedor
    this.container.appendChild(trumpFaceImage)           // Añade la imagen al contenedor "div" que se crea al llamar Thing.call(this, document.createElement("div"))

    var trumpFaceKissImage = document.createElement("img")
    trumpFaceKissImage.src = "images/donkeykong-attacking1.png"
    trumpFaceKissImage.style.width = "300px"
    trumpFaceKissImage.style.position = "absolute"
    trumpFaceKissImage.style.zIndex = 1
    trumpFaceKissImage.style.left = '15px'
    trumpFaceKissImage.style.top = '14px'
    this.container.appendChild(trumpFaceKissImage)

    var trumpBodyImage = document.createElement("img")
    trumpBodyImage.src = "images/donkeykong-attacking2.png"
    trumpBodyImage.style.width = "300px"
    trumpBodyImage.style.position = "absolute"
    trumpBodyImage.style.zIndex = 1
    trumpBodyImage.style.left = '-10px'
    trumpBodyImage.style.top = '50px'
    this.container.appendChild(trumpBodyImage)

    var STEP = 10

    document.addEventListener('keydown', function (event) {
        if (event.key === 'k') {
            this.container.removeChild(trumpFaceImage)
            this.container.appendChild(trumpFaceKissImage)
        } else if (event.key === 'n') {
            this.container.removeChild(trumpFaceKissImage)
            this.container.appendChild(trumpFaceImage)
        } else if (event.key === 'ArrowUp')
            this.moveY(-STEP)
        else if (event.key === 'ArrowDown')
            this.moveY(STEP)
        else if (event.key === 'ArrowLeft') {
            this.moveX(-STEP)
        } else if (event.key === 'ArrowRight')
            this.moveX(STEP)
    }.bind(this))
}

Trump.prototype = Object.create(Thing.prototype)
Trump.prototype.constructor = Trump
