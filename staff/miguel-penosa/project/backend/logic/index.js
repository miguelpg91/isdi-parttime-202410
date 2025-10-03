import registerUser from "./registerUser.js"
import authenticateUser from "./authenticateUser.js"
import createPost from "./createPost.js"
import getPosts from "./getPosts.js"
import deletePost from "./deletePost.js"
import searchPost from "./searchPost.js"
import editPost from "./editPost.js"

const logic = {
    authenticateUser,
    registerUser,

    createPost,
    getPosts,
    deletePost,
    searchPost,
    editPost
}

export default logic