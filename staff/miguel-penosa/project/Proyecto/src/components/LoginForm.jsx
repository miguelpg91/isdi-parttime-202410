import { useState } from "react";
import { loginUser } from "../services/api.js"

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await loginUser({ email, password })
            console.log("Usuario logeado:", user)
            // Podrías guardar el token en localStorage y redirigir
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