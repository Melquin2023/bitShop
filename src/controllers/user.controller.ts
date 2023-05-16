import  Express  from "express";






export const createUser= (req:Express.Request, res:Express.Response)=>{
    return res.status(201).json({msg:"Usaario creado"})
}

export const login = (req:Express.Request, res:Express.Response)=>{

    const DB = [
        {
            username: "Melquin",
            password: "compaq"
        },
        {
            username: "Felipe",
            password: "compaq"
        },
        {
            username: "Juan",
            password: "compaq"
        }

    ]
try{
let {username,password} = req.body  
if(username && password){

for(let user of DB){
    if(username === user.username){
        if(password==user.password){
            res.status(200).json({msg:"Login exitoso"})
        }
        }
    }
}
return res.status(401).json({msg:"Credenciales no existen"})
}
catch(error){
    console.log(error)
}
}