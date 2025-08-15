import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

const createPost = (userId, image, text) => {
    validate.id(userId, 'userId')           //  lleva STRING para que, si la validación falla, el error pueda decir algo más útil y legible,
    validate.image(image)
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })   //porque instancia???? 
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            const post = new Post({ author: user._id, image, text })      //instancia (creando un objeto) con el modelo Post.

            return post.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => { })      // ?? 
}

export default createPost


/* 

.then(user => {
    // ...
})

Es un callback: se ejecuta después de que User.findById haya terminado

///////el userId se define en el handler, y se obtiene desde el token JWT. ---> const { sub: userId } = payload


PORQUE auhtor: ???

*/