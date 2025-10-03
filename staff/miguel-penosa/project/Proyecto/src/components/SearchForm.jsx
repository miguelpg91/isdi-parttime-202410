import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchPost } from "../services/api";

function SearchForm() {
    const location = useLocation(); // detecta cambios de ruta  ///OJO

    const [filters, setFilters] = useState({
        tipo: "",
        ciudad: "",
        precio: "",
    });

    const [results, setResults] = useState([]);      // para guardar posts encontrados
    const [showOverlay, setShowOverlay] = useState(false);  // ??

    // reinicia formulario y overlay al cambiar de ruta
    useEffect(() => {
        setFilters({ tipo: "", ciudad: "", precio: "" });
        setResults([]);
        setShowOverlay(false);
    }, [location.pathname]);        // ??

    const handleSubmit = async (e) => {     // (e) event
        e.preventDefault();
        try {
            const foundPosts = await searchPost(filters);
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
                        value={filters.tipo}
                        onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}      ///e.target.value??
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
            {showOverlay && (
                <div className="posts-overlay">
                    <button
                        onClick={() => setShowOverlay(false)}
                        style={{ marginBottom: "10px" }}
                    >
                        Cerrar
                    </button>
                    {results.length === 0 ? (
                        <p>No se encontraron terrenos</p>
                    ) : (
                        results.map((post) => (
                            <article key={post._id} className="post-card">
                                <h3>
                                    <span className="city">{post.ciudad}</span> — <span className="tipo">{post.tipo}</span>
                                </h3>
                                <p>{post.text}</p>
                                {post.imagen && (
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


/// LINEA: 94,95, 97, 102 --->MAP?? ; KEY???; SPAN???; POST.IMAGEN DE DONDE SALE?


/// ):( ; &&