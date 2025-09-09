import { useState } from "react";
import { createPost } from "../services/api";

function createPostForm() {
    const [formData, setFormData] = useState({      /// Estado inicial del formulario (VACIO)
        ciudad: "",
        text: "",
        precio: "",
        imagen: "",
        tipo: "Rústico"
    })
    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })   /// Cada vez que el usuario escribe/cambia un campo, actualiza ese campo en formData sin borrar los demás.
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newPost = await createPost(       //  Llama a createPost(...) pasando los datos que el usuario rellenó.
                Number(formData.precio),
                formData.text,
                formData.imagen,
                formData.ciudad,
                formData.tipo
            )
            console.log("Post creado con éxito:", newPost)
        } catch (err) {
            console.log(err.message)
        }
    }
    ///onSubmit={handleSubmit} → cuando se envía el formulario, ejecuta la función handleSubmit.
    return (
        <form onSubmit={handleSubmit}>
            <select name="tipo" formData={formData.tipo} onChange={handleChange}>
                <option value="Rústico">Rústico</option>
                <option value="Urbano">Urbano</option>
                <option value="Industrial">Industrial</option>
                <option value="Agrícola">Agrícola</option>
            </select>

            <input name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} />
            <input name="precio" type="number" placeholder="Precio" value={formData.precio} onChange={handleChange} />
            <textarea name="text" placeholder="Descripción" value={formData.text} onChange={handleChange}></textarea>
            <input name="image" placeholder="URL de imagen (opcional)" value={formData.image} onChange={handleChange} />

            <button type="submit">Crear Post</button>
        </form>
    )

}


/*

<input> →       campo de entrada de texto o número.

name="ciudad" →         identifica el campo como “ciudad”.

placeholder="Ciudad" →      texto guía que aparece hasta que el usuario escribe.

value={formData.ciudad} →       conecta el valor con formData.ciudad.

onChange={handleChange} →       actualiza el estado al escribir.



*/