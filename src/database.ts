import mongoose from "mongoose";






export  const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL || "")
        console.log("DB esta conectado")
        
    } catch (error) {
        console.log(error)
        
    }
}

