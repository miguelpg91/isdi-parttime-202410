import { json } from "express"

export default json()


/*
- json() :Transformar automáticamente el cuerpo (body) de las peticiones HTTP en formato JSON
 a un objeto JavaScript accesible desde req.body
 
-REQ.BODY: es lo que ha escrito el usuario, convertido a objeto para que tú lo puedas usar fácilmente en el backend.

solo funciona si tienes el middleware express.json() activado


Frontend crea objeto JS
→ { email: 'migue@mail.com', password: '1234' }

Se convierte en texto JSON con JSON.stringify
→ '{"email":"migue@mail.com","password":"1234"}'

Se envía al backend como texto
(por red HTTP con fetch, axios, etc.)

Middleware express.json() en backend
→ Convierte el texto JSON de vuelta a objeto

Ahora puedes manejar req.body
→ { email: 'migue@mail.com', password: '1234' }

*/