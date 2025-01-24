import fs from "fs"     /// importa el módulo fs: permite leer y escribir archivos

const db = {                ///Getter: Método que se utiliza para obtener datos de una propiedad de un objeto.
    get users() {           /// Este getter permite obtener la lista de usuarios.
        const users = fs.readFileSync("./data/users.json", "utf8")      // Lee el archivo 'users.json' en formato utf-8.

        return JSON.parse(users)    // Convierte el contenido del archivo (JSON) a un objeto JavaScript
    },

    set users(users) {      ///Este setter permite modificar la lista de usuarios.
        fs.writeFileSync("./data/users.json", JSON.stringify(users))    //se convierte el valor a formato JSON
    },

    get posts() {
        const posts = fs.readFileSync("./data/posts.json", "utf8")

        return JSON.parse(posts)
    },

    set posts(posts) {
        fs.writeFileSync("./data/posts.json", JSON.stringify(posts))

    }
}

export default db

