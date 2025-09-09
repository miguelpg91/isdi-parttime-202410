import { useState } from "react";
import Logo from "./assets/react.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [formType, setFormType] = useState(null);

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <a href="/" className="logo-button">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <h1 className="title">Tu Terreno</h1>
        </div>
        <div className="button-container">
          <button
            className={`button ${formType === "registro" ? "underline" : ""}`}
            onClick={() => setFormType("registro")}
          >
            Registrarse
          </button>
          <button
            className={`button ${formType === "login" ? "underline" : ""}`}
            onClick={() => setFormType("login")}
          >
            Iniciar sesión
          </button>
        </div>
      </header>

      <main className="main">
        <div className="bloque-izq">
          <h2 className="subtitle">
            Encuentra tu <br /> parcela ideal
          </h2>
        </div>

        {/* Formulario de búsqueda */}
        <SearchForm />

        {/* Login o registro */}
        {formType === "login" && <LoginForm />}
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


*/


/*


    <div className="logo-container">
          <Link to="/" className="logo-button">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>




 <main className="main">
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>




*/