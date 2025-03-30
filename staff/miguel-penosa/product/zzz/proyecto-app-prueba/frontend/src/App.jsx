import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from './Posts';
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null); // Estado que maneja la información del usuario

  useEffect(() => {
    const token = localStorage.getItem("token"); // Intentamos obtener el token de localStorage
    if (token) {
      fetch("http://localhost:4000/api/user", {
        headers: { Authorization: `Bearer ${token}` } // Enviamos el token en la cabecera
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user)); // Si el token es válido, guardamos los datos del usuario
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={user ? <Posts /> : <Navigate to="/login" />} />
        {/* Ruta principal, si no hay usuario, redirige a login */}
        <Route path="/" element={user ? <Posts /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}