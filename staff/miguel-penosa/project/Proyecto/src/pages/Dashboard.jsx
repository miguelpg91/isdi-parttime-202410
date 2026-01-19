import { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/api.js";
import CreatePostForm from "../components/CreatePostForm.jsx";
import EditPostForm from "../components/EditPostForm.jsx"
import Header from "../components/Header.jsx";

// Helper para extraer userId del token
function getUserIdFromToken() {
    const token = localStorage.getItem("token");        /// Obtienes token que te devolvió el backend al hacer login
    if (!token) return null;
    try {
        const payload = token.split(".")[1];                                            /// Token se compone de HEADER.PAYLOAD.SIGNATURE, lo divide en un array de 3 y toma la 2ª parte(payload). /// (".") Separa cada punto
        const json = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));   ///atob convierte Base64URL a string y JSON.parse lo convierte en un objeto JS con los datos del token (sub=userId, iat, exp)
        return json.sub || null;                                                          //Devuelve el userId (campo sub).
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

function Dashboard({ loggedIn, setLoggedIn }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingPost, setEditingPost] = useState(null)     ///editingPost = estado que guarda qué post se está editando ahora mismo

    const userId = getUserIdFromToken();

    useEffect(() => {                               ////porque useeffect?????
        if (!userId) {
            setLoading(false);
            setError("Usuario no autenticado");
            return;
        }

        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await getPosts();              // pedimos todos los posts al servidor

                // Filtra posts del usuario actual
                const myPosts = data.filter(
                    (p) =>                                                                          /// (p) = posts
                        p.author === userId ||                                                    ///   author es directamente userId                      
                        (p.author && (p.author._id === userId || p.author === userId))          // Si p.author existe y además p.author._id === userId o p.author === userId (según cómo venga)
                );                               /// userId vive en todo el docu???????

                setPosts(myPosts);              // guardamos los posts filtrados en el estado
            } catch (error) {
                console.error(error);
                setError("Error cargando posts");
            } finally {
                setLoading(false);      /// Pase lo que pase (éxito o error), quitamos el estado de cargando (setLoading(false)).
            }
        };

        fetchPosts();
    }, [userId]);           // este efecto se dispara cuando userId cambia

    // Borrar post
    const handleDelete = async (id) => {    // id del post
        try {
            await deletePost(id);
            setPosts((prev) => prev.filter((p) => p._id !== id));       /// prev y p que es ???
        } catch (error) {
            console.error(error);
            setError("Error borrando post");
        }
    };

    // Cuando se cree un post desde CreatePostForm
    const handlePostCreated = (newPost) => {                // Cuando se cree un post desde CreatePostForm
        setPosts((prev) => [newPost, ...prev]);             // metemos ese post nuevo al principio del array actual sin pedirlo de nuevo al servidor
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />      {/*Este componente sobreescribe el header que tenemos en App.jsx el cual está fuera del Routes para que sea visible siempre */}
            <div className="dashboard-container">
                <h1>Panel de Usuario</h1>

                <div className="dashboard-content">
                    <CreatePostForm userId={userId} onPostCreated={handlePostCreated} />

                    <section className="posts-list">            {/*porque section ?? ? */}
                        {editingPost && (                       //RENDERIZADO CONDICIONAL: SI EDITINGPSOT NO ES NULL, MUESTRA EL FORMULARIO DE EDICIÓN
                            <EditPostForm
                                post={editingPost}
                                onPostUpdated={(updated) => {
                                    setPosts((prev) =>
                                        prev.map((p) => (p._id === updated._id ? updated : p))  ///??????
                                    );
                                    setEditingPost(null);
                                }}
                                onCancel={() => setEditingPost(null)}  ///??????
                            />
                        )}

                        {/* Lista de posts */}
                        {posts.length === 0 ? (
                            <p>No tienes posts</p>
                        ) : (                           // SI NO, RENDERIZA LA LISTA DE POSTS
                            posts.map((post) => (
                                <article key={post._id} className="post-card">
                                    <h3>
                                        <span className="city">{post.ciudad}</span> - <span className="tipo">{post.tipo}</span>
                                    </h3>
                                    <p>{post.text}</p>
                                    {post.imagen && (      // SI HAY IMAGEN, MUESTRALA
                                        <img
                                            src={post.imagen}
                                            alt={`Imagen de ${post.tipo} en ${post.ciudad}`}
                                            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
                                        />
                                    )}
                                    <p>
                                        Precio: <span className="precio">{post.precio} €</span>
                                    </p>
                                    <button onClick={() => setEditingPost(post)}>Editar Post</button>
                                    <button onClick={() => handleDelete(post._id)}>Borrar</button>
                                </article>
                            ))
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;



///     {} se usan para meter JavaScript dentro de JSX

///     const fetchPosts useEffect no acepta directamente funciones async, por eso se define dentro y luego se llama.


/*

? : = si condición es verdadera devuelve A, si no devuelve B

|| = si la primera parte es falsa/undefined/null/0, devuelve la segunda

&& = si la primera parte es verdadera, evalúa y devuelve la segunda

*/



/*


author: ObjectId(...) --->

_id ----> identifica de forma exclusiva a cada usuario o post


*/


//////sub?
//  localstorage??
//  localstorage.getitem???
//  onPostCreated
//