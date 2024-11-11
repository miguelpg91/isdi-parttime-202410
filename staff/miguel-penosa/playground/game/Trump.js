class Trump extends Thing {
    constructor() {
        super(document.createElement('div'));

        // Define el tamaño del objeto 'Trump'
        this.setSize(300, 300);

        var trumpFaceImage = document.createElement("img");
        trumpFaceImage.src = "images/donkeykong.png";
        trumpFaceImage.style.width = "300px";
        trumpFaceImage.style.position = "absolute";
        trumpFaceImage.style.zIndex = 1;
        trumpFaceImage.style.left = "20px";
        trumpFaceImage.style.top = "18px";
        this.container.appendChild(trumpFaceImage);

        var trumpFaceKissImage = document.createElement("img");
        trumpFaceKissImage.src = "images/donkeykong-attacking1.png";
        trumpFaceKissImage.style.width = "300px";
        trumpFaceKissImage.style.position = "absolute";
        trumpFaceKissImage.style.zIndex = 1;
        trumpFaceKissImage.style.left = "15px";
        trumpFaceKissImage.style.top = "14px";

        const trumpBodyImage = document.createElement("img");
        trumpBodyImage.src = "images/donkeykong-attacking2.png";
        trumpBodyImage.style.width = "300px";
        trumpBodyImage.style.position = "absolute";
        trumpBodyImage.style.zIndex = 1;
        trumpBodyImage.style.left = "20px";
        trumpBodyImage.style.top = "18px";

        var STEP = 10;
        var currentImage = trumpFaceImage;  // ???

        document.addEventListener('keydown', function (event) {
            if (event.key === 'k') {
                // Cambiar a la imagen de "k"
                if (currentImage !== trumpFaceKissImage) {
                    this.container.removeChild(currentImage);
                    this.container.appendChild(trumpFaceKissImage);
                    currentImage = trumpFaceKissImage;
                }
            } else if (event.key === 'n') {
                // Cambiar a la imagen de "n"
                if (currentImage !== trumpFaceImage) {
                    this.container.removeChild(currentImage);
                    this.container.appendChild(trumpFaceImage);
                    currentImage = trumpFaceImage;
                }
            } else if (event.key === 'a') {
                // Cambiar a la imagen de "a" (body)
                if (currentImage !== trumpBodyImage) {
                    this.container.removeChild(currentImage);
                    this.container.appendChild(trumpBodyImage);
                    currentImage = trumpBodyImage;
                }
            } else if (event.key === 'ArrowUp') {
                this.moveY(-STEP);
            } else if (event.key === 'ArrowDown') {
                this.moveY(STEP);
            } else if (event.key === 'ArrowLeft') {
                this.moveX(-STEP);
            } else if (event.key === 'ArrowRight') {
                this.moveX(STEP);
            }
        }.bind(this));
    }
}