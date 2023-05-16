import  Express  from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/index"
import {connectDB} from "./database";

// CREAR INSTANCIAS DE EXPRESS
const app = Express()


//traer el puerto de las variables de entorno
dotenv.config()

//conectar a base de datos
connectDB()

//establecer el puerto en q se ejecuta  el api
const port=process.env.PORT || 3200

//establecer usos de express
app.use(Express.json())

//establecer las rutas  a utilizar en el api
app.use("/api", apiRoutes)
//ejecucion de api
app.listen(port, ()=> console.log(`api is running in port ${port}`) )