import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo-principal.svg"

export default function Header({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("token")
        setLoggedIn(false)
        navigate("/")
    }

    return (

        <header className="header">
            <div className="logo-container">
                <Link to="/" className="logo-button">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                <Link to="/">
                    <h1>Tu Terreno</h1>
                </Link>
            </div>

            <div className="button-container">
                {!loggedIn && (
                    <>
                        <Link to="/registro" className="button">
                            <i className="fa-solid fa-user-plus"></i> Registrarse
                        </Link>

                        <Link to="/login" className="button">
                            <i className="fa-solid fa-right-to-bracket"></i> Iniciar sesión
                        </Link>
                    </>
                )}

                {loggedIn && (
                    <>
                        <button className="button" onClick={() => navigate("/dashboard")}>Panel de usuario</button>
                        <button className="button" onClick={handleLogOut}>Cerrar sesión</button>
                    </>
                )}
            </div>
        </header>
    )

}


/*

 const token = localStorage.getItem("token");
    setLoggedIn(!!token);

*/