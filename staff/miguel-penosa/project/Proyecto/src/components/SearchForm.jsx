import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchPost } from "../services/api";

function SearchForm() {         ///COMPONENTE
    const location = useLocation(); // detecta cambios de ruta  ///OJO

    const [filters, setFilters] = useState({    ///Filtros de formulario de busqueda
        tipo: "",
        ciudad: "",
        precio: "",
    });

    const [results, setResults] = useState([]);      // para guardar posts encontrados
    const [showOverlay, setShowOverlay] = useState(false);  // panel de posts: false => oculto

    // reinicia formulario y overlay al cambiar de ruta
    useEffect(() => {
        setFilters({ tipo: "", ciudad: "", precio: "" });   /// Reinicia el formulario
        setResults([]);                                     /// Vacía resultados anteriores
        setShowOverlay(false);
    }, [location.pathname]);        ////// Se ejecuta cuando cambia la ruta

    const handleSubmit = async (e) => {     // (e) event
        e.preventDefault();
        try {
            const foundPosts = await searchPost(filters);   ///Envia filtros al backend
            setResults(foundPosts);
            setShowOverlay(true);   // mostrar overlay al buscar
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <select
                        required
                        value={filters.tipo}                                                     // e.target.value = opción seleccionada.
                        onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}      /// Copia filtros y actualiza solo tipo
                    >
                        <option value="" disabled hidden></option>
                        <option value="Rústico">Rústico</option>
                        <option value="Urbano">Urbano</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Agrícola">Agrícola</option>
                    </select>
                    <label>Tipo de terreno</label>
                </div>

                <div className="field">
                    <input
                        type="text"
                        required
                        placeholder=" "
                        value={filters.ciudad}
                        onChange={(e) => setFilters({ ...filters, ciudad: e.target.value })}
                    />
                    <label>Ciudad</label>
                </div>

                <div className="field">
                    <select
                        required
                        value={filters.precio}
                        onChange={(e) => setFilters({ ...filters, precio: e.target.value })}
                    >
                        <option value="" disabled hidden></option>
                        <option value="0-50000">0 - 50.000€</option>
                        <option value="50000-100000">50.000 - 100.000€</option>
                        <option value="100000-200000">100.000 - 200.000€</option>
                        <option value="200000+">200.000€+</option>
                    </select>
                    <label>Rango de precio</label>
                </div>

                <button type="submit">Buscar</button>
            </form>

            {/* Panel lateral con posts */}
            {showOverlay && (                                   ////    Si showOverlay(panel de posts) es true,
                <div className="posts-overlay">
                    <button
                        onClick={() => setShowOverlay(false)}
                        style={{ marginBottom: "10px" }}
                    >
                        Cerrar
                    </button>
                    {results.length === 0 ? (                   ////    Si no hay resultados → muestra mensaje
                        <p>No se encontraron terrenos</p>
                    ) : (                                       ///     Si hay resultados ...
                        results.map((post) => (                 ///     Recorre el array results y devuelve componente por cada post
                            <article key={post._id} className="post-card">
                                <h3>
                                    <span className="city">{post.ciudad}</span> — <span className="tipo">{post.tipo}</span>
                                </h3>
                                <p>{post.text}</p>
                                {post.imagen && (       //// Si el post tiene imagen...
                                    <img
                                        src={post.imagen}
                                        alt={`Imagen de ${post.tipo} en ${post.ciudad}`}
                                        style={{ width: "100%", maxWidth: "450px", height: "auto" }}
                                    />
                                )}
                                <p>
                                    Precio: <span className="precio">{post.precio} €</span>
                                </p>
                            </article>
                        ))
                    )}
                </div>
            )}
        </>
    );
}

export default SearchForm;


/*

Si showOverlay es false → no se renderiza nada.

Si showOverlay es true → se muestra el panel.

Dentro del panel:

Si results.length === 0 → muestra “No se encontraron terrenos”.

Si hay resultados → recorre results y pinta un post por cada uno.

Si un post tiene imagen → se muestra la imagen.



*/