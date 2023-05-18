import  Express  from "express";
import mongoose from "mongoose";
import productModel from "../models/product.model";


export const getproduct = async (req:Express.Request, 
    res:Express.Response)=>{
    try{
        const result = await productModel.find()

        return res.status(200).json({result})
    }
    catch(error){
        console.log(error)
    return res.status(400).json ({Msg: "Ha ocurrido un error ",error})
    }
}

export const createProduct=  async(
        req:Express.Request, 
        res:Express.Response)=>{
          try {
    
        let newProduct = req.body
        const productCreated = await productModel.create(newProduct)
    
        if(productCreated) return res.status(201).json({msg: "Producto creado"})
            throw {msg:"error al crear el producto"}     
    
      } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "ha ocurrido un error", error})
      }
    
    }

    export const updateProduct = async (
        req:Express.Request, 
        res:Express.Response) => {
            
            try{
                let {dataToUpdate, _id} = req.body
                const updataDate = await productModel.findByIdAndUpdate(_id, dataToUpdate)
                
                return res.status(200).json({msg: "Producto actualizado"})
            }
               catch (error) {
                console.log(error)
                return res.status(400).json({msg: "ha ocurrido un error", error})
              }
        }

    export const deleteProduct = async (
        req: Express.Request, 
        res: Express.Response) => {
            try {
              const productId = req.params.id;
          
              const deletedProduct = await productModel.findByIdAndDelete(productId);
          
              if (!deletedProduct) {
                return res.status(404).json({ msg: "Producto no encontrado" });
              }
          
              return res.status(200).json({ msg: "Producto eliminado" });
            } catch (error) {
              console.log(error);
              return res.status(400).json({ msg: "Ha ocurrido un error", error });
            }
          };