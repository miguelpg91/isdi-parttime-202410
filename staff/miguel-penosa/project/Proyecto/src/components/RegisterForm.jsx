import { useState } from "react";
import { registerUser } from "../services/api";

function RegisterForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newUser = await registerUser(formData)
            console.log("Usuario registrado:", newUser)
            ///if (onSuccess) onSuccess()   //onSuccess sirve para que el hijo (RegisterForm) le avise al padre (App) que todo salió bien, y el padre cambie el estado formType a null. Y por lo tanto se oculte el formulario
            navigate("/login")
        } catch (error) {
            console.error(error.message)
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
                        value={formData.nombre}
                        onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                        }
                    />
                    <label>Nombre</label>
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