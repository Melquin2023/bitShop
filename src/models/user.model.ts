import mongoose, { Schema, version } from "mongoose";

//esquema de la coleccion

const User = new Schema({
    id:{type: String, required:true},
    name: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    username:{type: String, required:true},
    password:{type: String, required:true},
    role: {type: String, required:true},
    active: {type: Boolean, required:false},
    dateBirth: {type: String, required:true},
    paymentMethods:{type: Array, defualt:[]},
    phoneNumber: {type: String, required:true},
}, {
    timestamps:true,
    versionKey: false,
})

export default mongoose.model("user", User)