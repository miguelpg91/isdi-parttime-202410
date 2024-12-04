const fs = require("fs")


const localStorage = {
    get users() {   //ex: const.users = JSON.parse(localStorage.users)      //Lee el contenido del archivo users.json y devuelve string
        const users = fs.readFileSync("./data/users.json", "utf8")

        return users
    },

    set users(users) { //ex: localStorage.users = JSON stringfy(users)       ///Recibe un string (datos en formato JSON). y lo guarda en users.json
        fs.writeFileSync("./data/users.json", users)
    }

}

module.exports = localStorage


/*Cuando necesitas la lista de usuarios: Llamas a localStorage.users (getter) y obtienes los datos desde users.json.
Cuando modificas o agregas usuarios: Convierte los datos a un string JSON y los pasas a localStorage.users = ... (setter), que actualiza el archivo. */
