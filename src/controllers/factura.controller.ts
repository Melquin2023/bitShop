import Express  from "express";
import mongoose from "mongoose";
import productModel from "../models/product.model";


export const generateBill = async (req: Express.Request, res: Express.Response) => {
    try {
      const { productIds } = req.body;
  
      // Obtengo datos de produc comprados
      const products = await productModel.find({ _id: { $in: productIds } });
  
      if (products.length === 0) {
        return res.status(404).json({ msg: "No se encontraron productos" });
      }
  
      // Calcular el total de la factura sumando los precios de los productos
      let total = 0;
      products.forEach((product) => {
        total += product.price;
      });
  
      // Crear el objeto de factura
      const bill = {
        products,
        total,
      };
  
      return res.status(200).json(bill);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Ha ocurrido un error", error });
    }
  };