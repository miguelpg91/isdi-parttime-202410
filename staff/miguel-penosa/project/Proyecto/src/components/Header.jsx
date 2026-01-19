import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo-principal.svg"

export default function Header({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("token")    /// borra token
        setLoggedIn(false)      /// cambia estado a no logueado
        navigate("/")           /// navega a la home....DISEÑO DE LA HOME DONDE ESTÁ?????
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
                {!loggedIn && (                                         ///Si es cierto que no esá logeado renderiza  esto..
                    <>
                        <Link to="/register" className="button">
                            <i className="fa-solid fa-user-plus"></i> Registrarse  {/* <i> Contenedor de iconos */}
                        </Link>

                        <Link to="/login" className="button">                               {/*React Router encuentra la <Route> con path="/login" y renderiza su element.*/}
                            <i className="fa-solid fa-right-to-bracket"></i> Iniciar sesión
                        </Link>
                    </>
                )}

                {loggedIn && (                                          ///Si es cierto que estás logeado renderiza  esto..
                    <>
                        <button className="button" onClick={() => navigate("/dashboard")}>Panel de usuario</button>
                        <button className="button" onClick={handleLogOut}>Cerrar sesión</button>        {/* BOTON : Cuando haces click llama a la funcion directamnte*/}
                    </>
                )}
            </div>
        </header>
    )

}


/*

 const token = localStorage.getItem("token");
    setLoggedIn(!!token);



<Link> : Solo cambia la URL. No puedes ejecutar código antes de ir a esa ruta


<button> + navigate()   :   Primero haces acciones extra (borrar token, cambiar estado). Luego cambias la URL


*/