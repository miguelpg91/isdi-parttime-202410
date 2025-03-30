import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Inicializas el hook para la redirección

    const handleLogin = async (e) => {
        e.preventDefault();

        // Realizamos una llamada al backend para verificar las credenciales
        const response = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            // Si las credenciales son correctas, guardamos el token en el localStorage
            localStorage.setItem("token", data.token);  // Guarda el token
            // Redirigimos al usuario a la ruta /posts
            navigate("/posts");
        } else {
            // Si las credenciales no son correctas, mostramos un mensaje de error
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;