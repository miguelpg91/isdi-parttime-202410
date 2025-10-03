import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api.js"

function LoginForm({ setLoggedIn }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()                  ///useNavigate es un hook de React Router convertido a funcion

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await loginUser({ email, password })
            console.log("Usuario logeado:", user)

            localStorage.setItem("token", user.token);      ////Almacena el token del usuario en el navegador                    user.token → es la propiedad token del objeto user ; "token" → es solo el nombre bajo el que guardas ese valor en localStorage
            setLoggedIn(true)
            // Solo aquí rediriges
            navigate("/dashboard");         ///Navigate para redirigir al panel de Usuario
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <h3 className="form-title">Iniciar sesión</h3>
            <div className="field">
                <input
                    type="email"
                    required
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
            </div>
            <div className="field">
                <input
                    type="password"
                    required
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Contraseña</label>
            </div>
            <button type="submit" className="submit-button">Entrar</button>
        </form>
    );
}

export default LoginForm


/*
localStorage.setItem("clave", "valor") → guarda un valor en el almacenamiento.

localStorage.getItem("clave") → lee un valor que ya está guardado.


*/