import { Routes, Outlet, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.jsx"
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import Header from "./components/Header.jsx"





function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token") !== null    /// Comprueba si existe un token en localStorage(si es distinto de null) y guarda el  resultado como booleano(true o false)
    if (token) {
      setLoggedIn(true)
    }

  }, [])    /// Se ejecuta una sola vez para comprobar si ya existe un token y mantener la sesión iniciada

  function HomeLayout() {     /// Creamos una plantilla para cada ruta(para no tener que repetir tanto codigo en cada ruta)
    return (
      <>
        <h2 className="subtitle"> Encuentra tu <br /> parcela ideal     {/*Contenido que irá en la plantilla(en cada route)*/}
        </h2>
        <SearchForm />
        <Outlet />
      </>
    )
  }

  function PrivateRoute({ loggedIn, children }) {   /// Ruta protegida: Tienes que estar logeado(loggedIn) para poder acceder a esa ruta
    if (!loggedIn) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <main className="main">
        <Routes>

          <Route element={<HomeLayout />}>
            <Route index element={null} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm setLoggedIn={setLoggedIn} />} /> {/*Solo setLoggedIn ya que solo necesita modificar el estado*/}
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute loggedIn={loggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;





{/*

Route normal SIN LAYOUT

<Route
  path="/"
  element={
    <>
      <h2 className="subtitle">
        Encuentra tu <br /> parcela ideal
      </h2>
      <SearchForm />
    </>
  }
/>

Se repite la misma estructura en cada route.
No es la forma óptima.
Lo correcto es usar un layout.

*/}