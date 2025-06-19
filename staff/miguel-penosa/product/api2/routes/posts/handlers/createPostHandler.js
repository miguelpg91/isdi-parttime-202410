import logic from '../../../logic/index.js'
import jwt from 'jsonwebtoken'      //BELOW 1

export default (req, res, next) => {            // ???
    try {
        const token = req.headers.authorization.slice(7)    //Extrae el token del header Authorization, quitando "Bearer " (los 7 primeros caracteres

        const payload = jwt.verify(token, process.env.JWT_SECRET)   //BELOW 2

        const { sub: userId } = payload     //BELOW 3

        const { image, text } = req.body    //Extrae image y text del cuerpo de la petición (lo que el usuario envió)

        logic.createPost(userId, image, text)
            .then(() => res.status(201).send())     //Si todo va bien, responde con un 201 (creado)
            .catch(error => next(error))
    } catch (error) {
        next(error)     //Envía ese error al sistema de manejo de errores de Express
    }
}


/* 

1.

-jsonwebtoken es una librería externa que se instala en tu proyecto con npm. Sirve para crear y verificar tokens JWT

const { sub: userId } = payload

El token JWT cuando se verifica devuelve un objeto llamado payload que contiene datos.

Dentro del payload hay un campo llamado sub (abreviatura de “subject” o “sujeto”).

Esa línea de código extrae el valor de sub y lo guarda en una variable llamada userId.

Es como decir: const userId = payload.sub

2.

-Verifica que el token JWT que ha llegado con la petición es válido y no ha sido manipulado

-token: es un string que viene en la cabecera de la petición

-jwt.verify(...): Comprueba que el token ha sido firmado correctamente con la misma clave secreta

-Si es válido, devuelve un objeto con los datos originales que se incluyeron al generar el token

-const payload = ...: Guarda ese objeto en la variable payload para poder acceder a su contenido


3.




- FUNCIONALIDAD

-Verifica si el usuario está logueado mediante JWT.

-Recoge los datos del post del req.body.

-Llama a la función createPost con esos datos.

-Responde con éxito o con error según el resultado.




*/