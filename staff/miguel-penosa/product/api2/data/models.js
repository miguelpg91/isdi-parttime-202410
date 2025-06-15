import mongoose from "mongoose"

const { Schema, model, Types: { ObjetcId } } = mongoose

const user = new Schema({   //Definimos ESQUEMA de user
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const post = new Schema({   //Definimos estructura de datos = ESQUEMA de post
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
})

const User = model('User', user)    //Creamos MODELO 'User' que usa ESQUEMA user(const user) para trabajar con los datos. Mongoose lo convierte automáticamente a 'users' y ese será el nombre de la coleccion
const Post = model('Post', post)

export {        //EXPORTAMOS
    User,
    Post
}

/* Colección = grupo de documentos en Mongodb con la misma estructura

Esa será la colección en MongoDB donde se guardan los documentos creados con User.create(...) */