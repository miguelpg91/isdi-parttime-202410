import { useState, useEffect } from "react"
import { getPosts, deletePost } from "../services/api";

export default function PostsList() {
    const [posts, setPosts] = useState([])      ///Le pasas como argumento inicial un array vacío [], 

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts()   //trae los posts del backend.
            setPosts(data)  //actualiza el estado con los posts obtenidos
        }
        fetchPosts()

    }, []);     // fetchPosts se llama una sola vez cuando crea la lista de posts
    const handleDelete = async (id) => {
        await deletePost(id)
        setPosts(posts.filter(post => post._id !== id))     /// Filter crea un nuevo array sin el post que borramos
    }       ///Comprueba si el _id de ese post es distinto del id que le pasamos para borrar.   Devuelve:true → si no es el post que queremos borrar → se queda en el array.

    return (
        <ul>
            {posts.map(post => (    //recorre todos los posts y genera un <li> por cada uno.
                <li key={post._id}>
                    {post.ciudad} - {post.tipo} - {post.precio}€
                    <button onClick={() => handleDelete(post._id)}>Borrar</button>
                </li>
            ))}
        </ul>
    );
}

//Botón “Borrar” → llama a handleDelete con el id del post correspondiente.

//EL GETPOSTS SE TIENE QUE OBTENER TRAS HACER LOGIN