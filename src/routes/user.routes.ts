import  Express  from "express";
import { Router } from "express";
import controller from "../controllers";
import { createUser } from "../controllers/user.controller";
import { getproduct } from "../controllers/product.controller";

const router=Router()
// crear un usuario

router.post("/create", controller.User.createUser);
router.get("/getAll", controller.User.getUser);
router.get("/getendpoint", controller.User.endpoint);
router.put("/update", controller.User.updateUser);
router.delete("/delete", () => {});

router.get("/getproduct", controller.product.getproduct);
router.post("/createProduct", controller.product.createProduct);
router.put("/updateProduct", controller.product.updateProduct);
router.delete("/deleteProduct", controller.product.deleteProduct);
router.post("/generateBill", controller.factura.generateBill);
// router.post("/login", controller.User.login)


export default router