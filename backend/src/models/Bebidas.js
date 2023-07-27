import mongoose from "mongoose";

const bebidasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        }
    }
);