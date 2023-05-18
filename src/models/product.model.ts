import mongoose,{Schema, version} from "mongoose";

const Product =new Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    stock: {type: Number, required:true},
    category: {type: Array, default:[]},
    descripcion:{type: String, required:true},
    images: {type: String, required:true},
},{
    timestamps:true,
    versionKey:false,
})

export default mongoose.model("product", Product)