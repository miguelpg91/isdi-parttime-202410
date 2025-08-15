import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose      ///??? ///{ ObjectId} --> se extrae de Types

const user = new Schema({        // SCHEMA: define cómo debe ser un documento en MongoDB //
    name: {
        type: String,               //MODEL :  te permite interactuar con la base de datos (crear, leer, actualizar, borrar documentos), basado en un Schema
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

const post = new Schema({                //instancia del constructor SCHEMA: una clase que se define en Mongoose 
    author: {
        type: ObjectId,                 ///     almacena el ID único de otro documento (referencia)
        ref: 'User',                //      "Este DNI pertenece a alguien que está en el archivo de Usuarios (referencia)"
        required: true,
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
})                                                  //  Creas modelos que conectan tu plantilla (schema) con la base de datos de MongoDB.

const User = model('User', user)                    //'User': Nombre del modelo     //user: Es el Schema definido arriba    //                                                              PORQUE EN MAYUSCULA AQUI ///QUE ESTÁ HACIENDO AQUOI
const Post = model('Post', post)

export {
    User,
    Post
}

/*

Types: { ObjectId }  ----->  Mongoose tiene un objeto llamado Types, y dentro de Types hay una propiedad llamada OBJECTID

const User = model  ------>  por convención se escribe con mayúscula porque representa una entidad real


Modelo: 'User' → colección en MongoDB: 'users'          ----> Mongoose lo crea en minuscula y plural automaticamente

Modelo: 'Post' → colección en MongoDB: 'posts'


*/