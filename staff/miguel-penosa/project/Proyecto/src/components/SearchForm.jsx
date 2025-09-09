import { useState } from "react";
import { searchLands } from "../services/api";

function SearchForm() {
    const [filters, setFilters] = useState({
        tipo: "",
        ciudad: "",
        precio: "",
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const results = await searchLands(filters)
            console.log("Terrenos encontrados:", results)
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                <select
                    required
                    value={filters.tipo}
                    onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
                >
                    <option value="" disabled hidden></option>
                    <option value="urbano">Urbano</option>
                    <option value="rural">Rural</option>
                    <option value="industrial">Industrial</option>
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
    );
}

export default SearchForm;


