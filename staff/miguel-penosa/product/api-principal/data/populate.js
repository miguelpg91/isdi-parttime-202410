import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

        const post = new Post({ author: pepito._id, image: 'https://fbi.cults3d.com/uploaders/12888752/illustration-file/302725c9-6bea-4a51-94a6-78bdc672e410/jiminy-anglea1.jpg', text: 'hat off!', date: new Date(2024, 0, 1) })

        const post2 = new Post({ author: pepito._id, image: 'https://www.aceroymagia.com/Images/articulo/figura-pepito-grillo-a-caballito-jiminy-cricket/01-figura-pepito-grillo-a-caballito-jiminy-cricket.jpg', text: 'riding my horse', date: new Date(2024, 9, 1) })

        const post3 = new Post({ author: pepito._id, image: 'https://pbs.twimg.com/media/CgJtKSRWwAAZiNa.jpg', text: 'my and my friend campa!', date: new Date(2025, 0, 1) })

        return Promise.all([pepito.save(), post.save(), post2.save(), post3.save()])
    })
    .then(([pepito, post, post2, post3]) => {
        console.log('user saved', pepito._id)
        console.log('post saved', post._id)
        console.log('post2 saved', post2._id)
        console.log('post3 saved', post3._id)
    })
    .catch(error => console.error(error))