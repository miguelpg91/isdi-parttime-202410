const root = ReactDOM.createRoot(document.querySelector("#root"))

// Guarda React.createElement en la constante 'jsx' para facilitar la creación de elementos React

const jsx = React.createElement

const title = jsx("h1", {
    children: ["Hangman"],
    style: {
        backgroundColor: "tomato"
        color: "green"
    }
})

const charForm = jsx("form", {
    children: [
        jsx("label", { children: "Char", htmlFor: "char" }), // Etiqueta 'label' con el texto 'Char' y atributo 'htmlFor' asociado al input con id 'char'.
        jsx("input", { type: "text", id: "char" }),
        jsx("button", { children: "Try", type: "submit" })
    ],
    onsubmit: event => {
        event.preventDefault()

        const form = event.target
        const input = form.char  // Selecciona el campo de entrada 'input'

        const char = input.value

        console.log(char)
    }
})

root.render([title, charForm])