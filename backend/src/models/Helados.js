import mongoose from "mongoose";

const heladosSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required: [true, "El nombre es requerido"],
            trim: true
        },
        precio:{
            type:Number,
            required: [true , "El precio es requerido"],
            trim: true
        },
        descripcion:{
            type:String,
            required: [true , "La descripcion es requerida"],
            trim: true
        },
        imagen:{
            type:String,
            required: [true , "La imagen es requerida"],
            trim: true
        }
    },
    {
        timestamps:true
    }
);

const helados = mongoose.model("helados",heladosSchema,"helados");
export default helados;