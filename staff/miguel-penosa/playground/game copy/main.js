
// Selecciona el contenedor con el ID 'root' en el DOM y crea una instancia de la clase 'Thing' con ese contenedor.
var root = new Thing(document.body.querySelector("#root"))   //Crea un contenedor raíz donde se agregarán otros objetos

var trump = new Trump   // Crea un objeto de la clase 'Trump'
root.add(trump)         // Añade el objeto 'trump' al contenedor 'root'
trump.setXY(100, 0)     // Posiciona 'trump' en las coordenadas (100, 0)

var trump2 = new Trump  // Crea un segundo objeto de la clase 'Trump'
root.add(trump)
trump.setXY(100.0)

var trump3 = new Trump
root.add(trump)
trump.setXY(100, 0)

document.body.style.backgroundColor = 'lightblue';



