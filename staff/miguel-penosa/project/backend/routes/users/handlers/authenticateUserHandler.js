import logic from "../../../logic/index.js"
import jwt from "jsonwebtoken"

export default async function authenticateUserHandler(req, res, next) {
  try {
    const { email, password } = req.body    /// express.json lo convierte a objeto y lo pone en req.body, ahora se extrae email y password 

    const user = await logic.authenticateUser(email, password)      /// Busca en BASE DATOS el usuario por email y compara password y devuelve usuario correcto (objeto con su _id,)
    const payload = { sub: user._id }                           //   Crea un objeto con el ID del usuario que se incluirá dentro del token JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET)     // Usa el payload y la clave para CREAR TOKEN

    res.json({ token })   // Se envía al frontend
  } catch (error) {
    next(error)         ///   Pasa el error al errorHandler
  }
}


/*

1️⃣ Creas el payload
2️⃣ Aún NO hay token
3️⃣ jwt.sign(payload, secret)
4️⃣ Se crea el token
5️⃣ El token se envía al frontend res.json({ token }) El frontend recibe el token 
6️⃣ El frontend guarda el token localStorage.setItem("token", token) El usuario queda autenticado


///


-authenticateUser busca el usuario (con los datos que le pasas del frontend) en MongoDB

-MongoDB devuelve un documento

user = {
  _id: "64fa8c9e12...",
  email: "a@a.com",
  password: "hash..."
}

-El payload es el objeto que preparas (con el sub) y luego jwt.sign() lo convierte en un token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Este se manda a frontend y se guarda en LocalStorage.set

Y ahora que lo tenemos, ya podemos hacer una solicitud protegida en fetch: añadiendole el texto Bearer + token

Ahora en authMiddleware: le sacamos el token (sin Bearer) y del token lo descodificamos y se convierte en esto: 

decoded = {
  sub: user._id,
  iat: ...,
  exp: ...
}

y de aqui solo tomamos el sub que es el userId y lo renombramos a req.userId ()

(este proceso lo tenemos que hacer en cada peticion)






*/