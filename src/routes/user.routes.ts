import  Express  from "express";
import { Router } from "express";
import controller from "../controllers";
import { createUser } from "../controllers/user.controller";

const router=Router()
// crear un usuario

router.post("/create", controller.User.createUser);
router.post("/login", controller.User.login)


export default router