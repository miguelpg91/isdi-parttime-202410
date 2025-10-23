import { Routes, Route, Link } from "react-router-dom";
import "./App.css";                                                   /// ??????? PORQUE NO IMPORTA EL INDEX.CSS TAMBIEN
import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.jsx"
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Dashboard from "./components/Dashboard.jsx"
import Header from "./components/Header.jsx"





function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token") !== null
    if (token) {
      setLoggedIn(true)
    }

  }, [])

  return (
    <div>
      {/* Header fijo */}
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <main className="main">
        <Routes>
          {/* Cada Route define una “pantalla” o vista” de tu aplicación. */}
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

          {/*Dentro de cada element={...} decides qué componentes se muestran */}
          <Route
            path="/registro"
            element={
              <>
                <h2 className="subtitle">
                  Encuentra tu <br /> parcela ideal
                </h2>
                <SearchForm />
                <RegisterForm />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <h2 className="subtitle">
                  Encuentra tu <br /> parcela ideal
                </h2>
                <SearchForm />
                <LoginForm setLoggedIn={setLoggedIn} />
              </>
            }
          />

          {/* Dashboard solo, sin la home */}
          <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


/*

        {formType === "registro" && <RegisterForm />}   //  Aquí defines onSuccess para que cambie el estado y oculte el formulario.



-useState sirve para guardar información que puede cambiar(formulario: Register, login,..) y,
cada vez que cambie, React vuelve a renderizar (actualizar) la pantalla automáticamente.


  {formType === "login" && <LoginForm />} 


  <Routes> <Route <>  </>   />  </Routes>


*/


