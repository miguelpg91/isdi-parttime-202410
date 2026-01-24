# Backend Posts API

## 🚀 Stack

- Node.js  
- Express  
- MongoDB + Mongoose  
- JWT (autenticación)  
- Zod (validación de datos)  
- Arquitectura por capas  
  - routes  
  - handlers  
  - logic  
  - models  

---

## 🔐 Autenticación

- Registro y login con JWT
- El `userId` se extrae del token en cada request protegida
- Control de ownership:
  - Un usuario solo puede editar o borrar sus propios posts

---

## 📦 Endpoints principales

### Auth

- POST `/users/register`
- POST `/users/login`

### Posts (requieren token)

- POST `/posts` → crear post  
- GET `/posts` → listar posts del usuario  
- PUT `/posts/:postId` → editar post  
- DELETE `/posts/:postId` → eliminar post  

---

## 🧠 Validación y errores

- Validación de datos con Zod
- Errores custom:
  - ValidationError
  - NotFoundError
  - OwnershipError
- Todos los errores se centralizan en un `errorHandler`

---

## ▶️ Instalación

```bash
npm install
npm run dev
Crear archivo .env:

env
Copiar código
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=3000
📁 Estructura del proyecto
css
Copiar código
src/
 ├─ routes/
 ├─ handlers/
 ├─ logic/
 ├─ models/
 ├─ middlewares/
 ├─ com/