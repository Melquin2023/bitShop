import  Express  from "express";
import mongoose from "mongoose";
import userModel from "../models/user.model";



export const getUser = async (req:Express.Request, 
    res:Express.Response)=>{
    try{
        const result = await userModel.find()

        return res.status(200).json({result})
    }
    catch(error){
        console.log(error)
    return res.status(400).json ({Msg: "Ha ocurrido un error ",error})
    }
}

export const updateUser = async (
    req:Express.Request, 
    res:Express.Response) => {
        
        try{
            let {dataToUpdate, _id} = req.body
            const updataDate = await userModel.findByIdAndUpdate(_id, dataToUpdate)
            
            return res.status(200).json({msg: "Usuario actualizado"})
        }
           catch (error) {
            console.log(error)
            return res.status(400).json({msg: "ha ocurrido un error", error})
          }
    }

    export const createUser1 = async (req: Express.Request, res: Express.Response) => {
        try {
          const { username, email, dateBirth,} = req.body;
        
      
          // Verificar si no esta repetido el usuario
          const existingUsername = await userModel.findOne({ username });
      
          if (existingUsername) {
            return res.status(400).json({ msg: "El nombre de usuario ya está en uso" });
          }
      
          // Verificar si ya existe un usuario con el mismo correo electrónico
          const existingEmail = await userModel.findOne({ email });
      
          if (existingEmail) {
            return res.status(400).json({ msg: "El correo electrónico ya está en uso" });
          }
          // Calcular la edad del usuario
            const today = new Date();
            const birthDate = new Date(dateBirth);
            const age = today.getFullYear() - birthDate.getFullYear();

            // Verificar si el usuario es mayor de edad (18 años o más)
            if (age < 18) {
            return res.status(400).json({ msg: "Debes ser mayor de edad para registrarte" });
            }

            // Crear un nuevo usuario si no hay duplicados y es mayor de edad
            let newUser = req.body
            const userCreated = await userModel.create(newUser);
      
          if (userCreated) {
            return res.status(201).json({ msg: "Usuario creado" });
          }
      
          throw { msg: "Error al crear el usuario" };
        } catch (error) {
          console.log(error);
          return res.status(400).json({ msg: "Ha ocurrido un error", error });
        }
      };

      export const endpoint = async (req: Express.Request, res: Express.Response) => {
        try {
                
          const user = await userModel.find();
      
          if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
          }
      
          return res.status(200).json(user);
        } catch (error) {
          console.log(error);
          return res.status(400).json({ msg: "Ha ocurrido un error", error });
        }
      };





export function getproduct(arg0: string, getproduct: any) {
    throw new Error("Function not implemented.");
}

export function createProduct(arg0: string, createProduct: any) {
    throw new Error("Function not implemented.");
}
// export const login = (req:Express.Request, res:Express.Response)=>{

//     const DB = [
//         {
//             username: "Melquin",
//             password: "compaq"
//         },
//         {
//             username: "Felipe",
//             password: "compaq"
//         },
//         {
//             username: "Juan",
//             password: "compaq"
//         }

//     ]
// try{
// let {username,password} = req.body  
// if(username && password){

// for(let user of DB){
//     if(username === user.username){
//         if(password==user.password){
//             res.status(200).json({msg:"Login exitoso"})
//         }
//         }
//     }
// }
// return res.status(401).json({msg:"Credenciales no existen"})
// }
// catch(error){
//     console.log(error)
// }
// }



// export const createUser=  async(
//     req:Express.Request, 
//     res:Express.Response)=>{
//       try {

//     let newUser = req.body
//     const userCreated = await userModel.create(newUser)

//     if(userCreated) return res.status(201).json({msg: "usuario creado"})
//         throw {msg:"error al crear el usuario"}
//         const { username, password } = req.body;

//     // Verificar si ya existe un usuario con el mismo nombre de usuario
    

//   } catch (error) {
//     console.log(error)
//     return res.status(400).json({msg: "ha ocurrido un error", error})
//   }

// }