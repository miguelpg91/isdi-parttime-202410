import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

const postSchema = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tipo: {
        type: String,
        required: true,
        enum: ["Rústico", "Urbano", "Industrial", "Agrícola"]
    },
    ciudad: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    }
})

const Post = model('Post', postSchema)

export default Post