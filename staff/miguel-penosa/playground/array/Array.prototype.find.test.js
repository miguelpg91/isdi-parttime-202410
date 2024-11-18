console.log("TEST Array.prototype.find")

console.log("CASE find donald duck in characters")

///Array de objetos
var characters = [
    { name: "Mickey Mouse", icon: "🐹" },
    { name: "Donald Duck", icon: "🦆" },
    { name: "Bugs Bunny", icon: "🐇" },

]

var character = characters.find(function (character) {

    return character.name === "Donald Duck"
})

console.log(character)


// FIND Busca y devuelve el primer elemento de un arreglo que cumple con una condición especificada.