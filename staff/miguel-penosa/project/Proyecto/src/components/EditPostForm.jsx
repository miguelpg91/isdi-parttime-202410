import { useState } from "react"
import { editPost } from "../services/api"

export default function EditPostForm({ post, onPostUpdated, onCancel }) {
    const [formData, setFormData] = useState({
        tipo: post.tipo,
        ciudad: post.ciudad,
        precio: post.precio,
        text: post.text,
        imagen: post.imagen || ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updated = await editPost(post._id, formData)
            onPostUpdated(updated)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <form onSubmit={handleSubmit} className="edit-post-form">
            <h3>Editar Post</h3>

            <label>Tipo</label>
            <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}

            >
                <option value="">Selecciona tipo</option>
                <option value="Rústico">Rústico</option>
                <option value="Urbano">Urbano</option>
                <option value="Industrial">Industrial</option>
                <option value="Agrícola">Agrícola</option>

            </select>

            <label>Ciudad</label>
            <input
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}

            />
            <label>Precio</label>
            <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}

            />
            <label>Texto</label>
            <input
                name="text"
                value={formData.text}
                onChange={handleChange}

            />
            <label>Imagen</label>
            <input
                type="text"
                name="imagen"
                placeholder="URL de la imagen"
                value={formData.imagen || ""}
                onChange={handleChange}
                required
            />

            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>

        </form>
    )


}

