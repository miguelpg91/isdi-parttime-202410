import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newUser = await registerUser(formData)
            console.log("Usuario registrado:", newUser)
            setMessage("Te has registrado exitosamente")
            ///if (onSuccess) onSuccess()   //onSuccess sirve para que el hijo (RegisterForm) le avise al padre (App) que todo salió bien, y el padre cambie el estado formType a null. Y por lo tanto se oculte el formulario
            navigate("/login")
        } catch (error) {
            console.error(error)
            setMessage("Hubo error al registrarte")
        }
    }



    return (
        <div className="form-container">
            <form className="form-card" onSubmit={handleSubmit}>
                <h3 className="form-title">Registrarse</h3>
                <div className="field">
                    <input
                        type="text"
                        required
                        placeholder=" "
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                        }
                    />
                    <label>username</label>
                </div>
                <div className="field">
                    <input
                        type="email"
                        required
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <label>Email</label>
                </div>
                <div className="field">
                    <input
                        type="password"
                        required
                        placeholder=" "
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    <label>Contraseña</label>
                </div>
                <button type="submit" className="submit-button">Registrarse</button>
            </form>
            {message && <p className="succes-message">{message}</p>}
        </div>
    );
}

export default RegisterForm;


/*

formData = el estado actual de los datos del formulario.

setFormData = la llave para actualizar esos datos

+ Mientras rellenas formulario:

setFormData({ ...formData, email: e.target.value })

...formData copia todo lo que ya había (username y password).

email: e.target.value sobrescribe solo el campo email.




*/