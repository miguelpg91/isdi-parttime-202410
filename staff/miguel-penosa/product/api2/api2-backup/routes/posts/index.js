import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {     //la ruta '/' dentro del router de posts significa /posts
    res.json({ message: 'Posts endpoint' })
})

export default router