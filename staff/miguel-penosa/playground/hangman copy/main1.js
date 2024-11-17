const root = reactDOM.createRoot(document.querySelector("#root"))

const title = React.createElement("h1", { children: ["Hangman"] })

const charLabel = React.createElement("label", { children: ["char"], htmlFor: "char" })
const charInput = React.createElement("input", { id: "char" })
const charSubmitButton = React.createElement("button", { children: ["Try"], type: "submit" })
const charForm = React.createElement("form", { children: [charLabel, charInput, charSubmitButton] })

root.render([title, charForm])
