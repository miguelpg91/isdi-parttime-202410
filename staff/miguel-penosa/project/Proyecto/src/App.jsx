import { Routes, Route, Link } from "react-router-dom";
import Logo from "./assets/react.svg";
import "./App.css";
import SearchForm from "./components/SearchForm"
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Link to="/" className="logo-button">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <h1 className="title">Tu Terreno</h1>
        </div>
        <div className="button-container">
          <Link to="/registro" className="button">Registrarse</Link>
          <Link to="/login" className="button">Iniciar sesión</Link>
        </div>
      </header>

      <main className="main">
        <div className="bloque-izq">
          <h2 className="subtitle">
            Encuentra tu <br /> parcela ideal
          </h2>
        </div>

        <SearchForm />

        <Routes>
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App



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