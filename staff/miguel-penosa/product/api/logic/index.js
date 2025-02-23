import authenticateUser from "./authenticateUser.js"        ///import porque importamos funciones, clases, objetos, o módulos completos desde otros archivos
import getUsername from "./getUserName.js"
import registerUser from "./registerUser.js"

import getPosts from "./getPosts.js"
import createPost from "./createPost.js"
import deletePost from "./deletePost.js"


const logic = {         ///objeto llamado logic que agrupa las tres funciones importadas, para facilitando así la reutilización del código
    authenticateUser,
    getUsername,
    registerUser,


    getPosts,
    createPost,
    deletePost
}

export default logic

/*

El index.js actúa como la entrada principal de la lógica del sistema(LOGICA DE NEGOCIO)
en tu archivo api, solo necesitas importar logic en lugar de cada archivo de lógica individualmente:

*/









