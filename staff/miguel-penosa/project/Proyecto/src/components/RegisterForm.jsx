import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [formData, setFormData] = useState({      /// Guarda los datos de formulario
        username: "",
        email: "",
        password: "",
    })

    const [message, setMessage] = useState("")      //Mensaje de exito o fracaso
    const navigate = useNavigate()                  /// Obtiene la función navigate para cambiar de ruta.

    const handleSubmit = async (e) => {             /// Se ejecuta al enviar el formulario
        e.preventDefault()
        try {
            const newUser = await registerUser(formData)    // Llama a la API enviando los datos del formulario
            console.log("Usuario registrado:", newUser)
            setMessage("Te has registrado exitosamente")

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
                            setFormData({ ...formData, username: e.target.value })  //Copia el estado actual (...formData)
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
                            setFormData({ ...formData, email: e.target.value })     /// Actualiza solo email con lo escrito
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
                            setFormData({ ...formData, password: e.target.value })      ///e.target.value = lo que el usuario ha escrito.
                        }
                    />
                    <label>Contraseña</label>
                </div>
                <button type="submit" className="submit-button">Registrarse</button>
            </form>
            {message && <p className="succes-message">{message}</p>}    {/* Si existe un mensaje, muéstralo por pantalla*/}
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