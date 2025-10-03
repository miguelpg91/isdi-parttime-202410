import Post from "../models/Post.js";
import { validate, errors } from "../com/index.js"

const { SystemError } = errors

export default async function searchPost({ tipo, ciudad, precio }) {
    try {
        const query = {}

        if (tipo) query.tipo = tipo

        if (ciudad) query.ciudad = new RegExp(ciudad, "i")

        if (precio) {
            if (precio.includes("-")) {
                const [min, max] = precio.split("-").map(Number);
                query.precio = { $gte: min, $lte: max };
            } else if (precio.endsWith("+")) {
                const min = Number(precio.replace("+", ""));
                query.precio = { $gte: min };
            }
        }

        return await Post.find(query);

    } catch (error) {
        throw new SystemError(error.message);
    }
}


/*
import Post from "../models/Post.js";
import { validate, errors } from "../com/index.js"

const { SystemError } = errors

export default async function searchPost(params) {
    try {
        const { tipo, ciudad, precio } = params; // extraemos filtros
        let posts = await Post.find(); // traemos todos los posts

        if (tipo) posts = posts.filter(p => p.tipo === tipo);
        if (ciudad) posts = posts.filter(p => p.ciudad.toLowerCase().includes(ciudad.toLowerCase()));

        if (precio) {
            const [min, max] = precio.split("-");   //un rango de precio como "50000-100000", lo separamos en min y max
            posts = posts.filter(p => {
                const price = Number(p.precio);     //  Convierte el precio del post (p.precio) a número para poder compararlo
                if (max && max !== "+") return price >= Number(min) && price <= Number(max);    //  Si hay un máximo definido y no es "+", devuelve true solo si el precio está entre min y max.
                return price >= Number(min);
            });
        }

        return posts;

    } catch (error) {
        throw new SystemError(error.message);
    }
}



*/