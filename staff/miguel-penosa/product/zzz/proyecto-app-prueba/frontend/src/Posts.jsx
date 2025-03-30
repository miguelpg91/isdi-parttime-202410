import React, { useState, useEffect } from 'react';
import "./Posts.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ description: "", imageUrl: "", imageByUrl: "" });
    const [preview, setPreview] = useState(null);

    // Cargar los posts desde el localStorage al montar el componente
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')); // Obtener posts del localStorage
        if (savedPosts) {
            setPosts(savedPosts); // Si existen, cargarlos en el estado
        }
    }, []);

    // Manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    // Manejar la selección de imagen desde el archivo
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            setNewPost({ ...newPost, imageUrl: imageUrl, imageByUrl: "" }); // reset URL if image is selected
        }
    };

    // Función para agregar un nuevo post
    const handleAddPost = (e) => {
        e.preventDefault();
        if (newPost.description.trim() === "" || (newPost.imageUrl === "" && newPost.imageByUrl === "")) {
            alert("Por favor, agrega una descripción y una imagen (por URL o archivo).");
            return;
        }

        const imageUrlToUse = newPost.imageUrl || newPost.imageByUrl;

        const post = {
            id: posts.length + 1,
            title: `Post ${posts.length + 1}`,
            description: newPost.description,
            imageUrl: imageUrlToUse,
            author: 'Miguel',
        };

        const updatedPosts = [...posts, post];
        setPosts(updatedPosts); // Agregar el nuevo post al estado

        // Guardar los posts actualizados en el localStorage
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        setNewPost({ description: "", imageUrl: "", imageByUrl: "" });
        setPreview(null); // Limpiar la vista previa
    };

    // Función para borrar un post
    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id); // Filtra el post que se debe eliminar
        setPosts(updatedPosts);

        // Guardar los posts actualizados en el localStorage
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    return (
        <div className="posts-container">
            {/* Formulario para crear un nuevo post */}
            <form className="post-form" onSubmit={handleAddPost}>
                <h3>Crear un nuevo post</h3>

                <input
                    type="text"
                    name="description"
                    placeholder="Escribe una descripción..."
                    value={newPost.description}
                    onChange={handleChange}
                    required
                />

                {/* Campo para elegir archivo de imagen */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {/* Campo para añadir la imagen por URL */}
                <input
                    type="text"
                    name="imageByUrl"
                    placeholder="O pega una URL de imagen..."
                    value={newPost.imageByUrl}
                    onChange={handleChange}
                />

                {/* Vista previa de la imagen seleccionada */}
                {preview && <img src={preview} alt="Vista previa" className="preview-image" />}
                {!preview && newPost.imageByUrl && (
                    <img src={newPost.imageByUrl} alt="Vista previa URL" className="preview-image" />
                )}

                <button type="submit">Publicar</button>
            </form>

            {/* Mostrar los posts */}
            <div className="posts-container">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <img className="post-image" src={post.imageUrl} alt={post.title} />
                        <div className="post-content">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-description">{post.description}</p>
                            <p className="post-author">Por: {post.author}</p>
                            <button className="delete-button" onClick={() => deletePost(post.id)}>
                                Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;