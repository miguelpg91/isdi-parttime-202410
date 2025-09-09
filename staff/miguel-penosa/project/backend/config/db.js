import mongoose from "mongoose"

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            autoIndex: true
        })
        console.log(" MongoDB conectada")
    } catch (error) {
        console.error("error conectando a MONGODB:", error.message)
        process.exit(1)
    }
}