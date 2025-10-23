import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

// 1. Conectar a la base de datos local en MongoDB (DB llamada "test")
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            // 2. Llamar a la función que autentica al usuario
            authenticateUser('zanahoria', '123123123')
                // 3. Si las credenciales son correctas → devuelve el userId
                .then(userId => console.log('user authenticated', userId))
                // 4. Si la contraseña o usuario son incorrectos → error
                .catch(error => console.error(error))
        } catch (error) {
            // 5. Si falla el bloque try → lo capturamos
            console.error(error)
        }
    })
    // 6. Si no se puede conectar a MongoDB → error aquí
    .catch(error => console.error(error))