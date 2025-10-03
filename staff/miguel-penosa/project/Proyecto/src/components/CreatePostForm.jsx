import { useState } from "react";
import { createPost } from "../services/api";

function CreatePostForm({ userId, onPostCreated }) {
    const [form, setForm] = useState({
        tipo: "",
        ciudad: "",
        precio: "",
        text: "",
        imagen: ""
    })

    const [error, setError] = useState(null)

    ///ACTUALIZA EL IMPUT DEL FORMULARIO

    const handleChange = (e) => {
        const { name, value } = e.target /// sabe qué campo del formulario cambió y cuál es su nuevo valor.
        setForm(prev => ({ ...prev, [name]: value }))     //Actualiza solo esa propiedad en form sin perder las demás (...prev).
    }


    const handleSubmit = async (e) => {     //
        e.preventDefault()
        if (!userId) {
            setError("No autenticado")
            return
        }

        try {
            const newPost = {
                tipo: form.tipo,
                ciudad: form.ciudad,
                precio: form.precio,
                text: form.text,
                imagen: form.imagen,
                userId: userId
            };

            const created = await createPost(newPost); // la API recibe FormData
            onPostCreated(created); // el hijo llama onPostCreated(created); → esto ejecuta handlePostCreated del padre.

            // limpia formulario
            setForm({
                tipo: "",
                ciudad: "",
                precio: "",
                text: "",
                imagen: ""
            });
            setError(null);
        } catch (error) {
            console.log(error.message);
            setError("Error creando post");
        }
    };



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="text-createpost">Crear Post</h2>
                {error && <p className="error">{error}</p>}      {/*Si error tiene un valor, React renderiza el <p> sino no renderiza nada*/}

                <div className="field">
                    <select
                        name="tipo"
                        placeholder="Tipo"
                        value={form.tipo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona tipo</option>
                        <option value="Rústico">Rústico</option>
                        <option value="Urbano">Urbano</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Agrícola">Agrícola</option>
                    </select>
                    <label>Tipo</label>
                </div>

                <div className="field">
                    <input
                        name="ciudad"
                        placeholder="Ciudad"
                        value={form.ciudad}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="field">
                    <input
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        value={form.precio}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="field">
                    <input
                        name="text"
                        placeholder="Descripción"
                        value={form.text}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="field">
                    <input
                        type="text"
                        name="imagen"
                        placeholder="URL de la imagen"
                        value={form.imagen}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button type="submit" className="submit-button">
                    Crear Post
                </button>
            </form>
        </div>
    );
}

export default CreatePostForm;


///onPostCreated es una función que el componente padre (Dashboard) le pasa al hijo (CreatePostForm) para que el hijo pueda avisar al padre cuando cree un nuevo post.


///PROPS: son los “datos o funciones que un componente hijo (createPostForm)recibe del componente padre (Dashboard)” para usarlos dentro de sí mismo.