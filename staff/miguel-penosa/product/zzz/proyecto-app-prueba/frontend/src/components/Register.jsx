import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Maneja el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple
        if (!formData.username || !formData.email || !formData.password) {
            alert('Todos los campos son requeridos');
            return;
        }

        // Llamada a la API del backend para registrar el usuario
        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Almacenar el token JWT en localStorage
                localStorage.setItem("token", data.token); // Guarda el token
                alert('Usuario registrado exitosamente');
                // Redirigir a la página de posts (o donde quieras)
                window.location.href = "/posts";  // O puedes usar navigate("/posts") si tienes un hook
            } else {
                alert('Error al registrar usuario');
            }
        } catch (error) {
            alert('Error de red');
        }
    };

    return (
        <div className="register-container">
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;