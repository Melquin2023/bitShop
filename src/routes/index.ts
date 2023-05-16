import { Router } from "express";

const router=Router()

//rutas de la api.
import user from "./user.routes"





//rutas del usuario

router.use("/user", user)
//rutas de producto

export default router