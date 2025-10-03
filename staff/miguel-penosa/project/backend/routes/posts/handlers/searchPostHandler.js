import logic from "../../../logic/index.js"

export const searchPostHandler = async (req, res, next) => {
    try {
        const { tipo, ciudad, precio } = req.query  //porque es un GET

        const results = await logic.searchPost({
            tipo: tipo,
            ciudad: ciudad,
            precio: precio
        })

        res.status(200).json(results)


    } catch (error) {
        next(error)
    }
}

export default searchPostHandler