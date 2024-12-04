const validate = {
    username(username) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 4) throw new Error('invalid username length')
    },

    password(password) {
        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')
    },

    name(name) {
        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')
    },

    email(email) {
        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
    },

    id(id, explain = 'id') {      ///permite que la misma función pueda validar diferentes tipos de identificadores (id, userId, transactionId, etc.) y generar mensajes de error personalizados según lo que se está validando.
        if (typeof id !== 'string') throw new Error(`invalid ${explain} type`)
        if (id.length < 10) throw new Error(`invalid ${explain} length`)
    }
}

module.exports = validate