
import { z } from "zod";

export const postSchema = z.object({
    title: z.string().min(3, "title debe tener al menos 3 caracteres"),
    precio: z.number().positive("precio debe ser mayor que 0"),
    ciudad: z.string().min(1, "ciudad no puede estar vacía"),
    tipo: z.enum(["Rústico", "Urbano", "Industrial", "Agrícola"], {
        errorMap: () => ({ message: "tipo inválido" })
    }),
    imagen: z.string().optional(), // si solo aceptas strings válidos
    text: z.string().optional()
});

///Zob: Zod es como un if gigante que engloba todo el objeto, para no tener que hacer(version anterior) muchos if que validen uno a uno

//npm install zob