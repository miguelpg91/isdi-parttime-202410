import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import authenticateUser from './authenticateUser.js'

import { errors } from 'com'
const { CredentialsError } = errors

import bcrypt from 'bcryptjs'

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {
        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: hash }))
            .then(() => authenticateUser('pepitogrillo', '123123123'))
            .then(userId => {
                expect(userId).to.be.a.string

                return User.findById(userId)
            })
            .then(user => {
                expect(user.username).to.equal('pepitogrillo')

                return bcrypt.compare('123123123', user.password)
            })
            .then(match => expect(match).to.be.true)
    })

    it('fails on wrong username', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: hash }))
            .then(() => authenticateUser('pepitogrill', '123123123'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.equal('wrong credentials')
            })
    })

    it('fails on wrong password', () => {
        let catchedError

        return bcrypt.hash('123123123', 10)
            .then(hash => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: hash }))
            .then(() => authenticateUser('pepitogrillo', '12312312'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).instanceOf(CredentialsError)
                expect(catchedError.message).to.equal('wrong credentials')
            })
    })

    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})



/*

    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

Se ejecuta una vez antes de todos los tests.

Conecta Mongoose a la base de datos de pruebas.

    beforeEach(() => User.deleteMany())

Se ejecuta antes de cada test individual.

Borra todos los usuarios para que cada test empiece limpio.

    afterEach(() => User.deleteMany())

Se ejecuta después de cada test individual.

Vuelve a dejar la colección vacía.

expect(userId).to.be.a.string;



it('succeeds on existing user', () => {
  // 1. Hash de una contraseña
  // 2. Creación de un usuario en la base de datos
  // 3. Llamada a authenticateUser con username y password correctos
  // 4. Comprobación de que devuelve un string (el id del usuario)
  // 5. Comprobación de que el username coincide
  // 6. Comprobación de que la contraseña hasheada corresponde a la original
})
js
Copiar código
it('fails on wrong username', () => {
  // 1. Crea un usuario con username correcto
  // 2. Llama authenticateUser con un username incorrecto
  // 3. Captura el error lanzado
  // 4. Comprueba que es un CredentialsError y tiene el mensaje esperado
})
js
Copiar código
it('fails on wrong password', () => {
  // 1. Crea un usuario con username correcto
  // 2. Llama authenticateUser con password incorrecta
  // 3. Captura el error lanzado
  // 4. Comprueba que es un CredentialsError y tiene el mensaje esperado
})




*/