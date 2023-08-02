import moongose from "mongoose";

const postreSchema =  moongose.Schema(
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
        timestamps: true
    }
)

const postres = moongose.model("postres",postreSchema,"postres");

export default postres;
