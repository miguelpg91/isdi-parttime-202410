import errors from "./errors/index.js"

const { ValidationError } = errors

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const USERNAME_REGEX = /^[a-z0-9_-]{1,30}$/
const PASSWORD_REGEX = /^((?!.*[\s])(?=.*[a-zA-Z0-9])(?=.*\d).{8,15})/
const URL_REGEX = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/

const validate = {
    username(username) {
        if (typeof username !== "string")
            throw new ValidationError("invalid username type")
        if (!USERNAME_REGEX.test(username))
            throw new ValidationError("invalid username syntax")
    },

    password(password) {
        if (typeof password !== "string")
            throw new ValidationError("invalid password type")
        if (!PASSWORD_REGEX.test(password))
            throw new ValidationError("invalid password syntax")
    },

    email(email) {
        if (typeof email !== "string")
            throw new ValidationError("invalid email type")
        if (!EMAIL_REGEX.test(email))
            throw new ValidationError("invalid email syntax") // <-- aquí faltaba throw
    },

    id(id, explain = "id") {
        if (typeof id !== "string")
            throw new ValidationError(`invalid ${explain} type`)
        if (id.length < 10)
            throw new ValidationError(`invalid ${explain} length`)
    },

    imagen(imagen) {
        if (typeof imagen === 'string') return; // solo strings válidos
        throw new ValidationError("invalid image file");
    },

    text(text) {
        if (typeof text !== "string")
            throw new ValidationError("invalid text type")
    },

    ciudad(ciudad) {
        if (typeof ciudad !== "string")
            throw new ValidationError("invalid ciudad type")
        if (ciudad.length < 1)
            throw new ValidationError("ciudad cannot be empty")
    },

    precio(precio) {
        if (typeof precio !== "number")
            throw new ValidationError("invalid precio type")
        if (precio <= 0)
            throw new ValidationError("precio must be greater than 0")
    },

    tipo(tipo) {
        const allowed = ["Rústico", "Urbano", "Industrial", "Agrícola"]
        if (typeof tipo !== "string")
            throw new ValidationError("invalid tipo type")
        if (!allowed.includes(tipo))
            throw new ValidationError(
                `tipo must be one of: ${allowed.join(", ")}`
            )
    }
}

export default validate
