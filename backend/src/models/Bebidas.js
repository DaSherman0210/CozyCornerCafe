import mongoose from "mongoose";

const bebidasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:[true , 'El nombre es obligatorio'],
            trim:true
        },
        tipo:{
            type:String,
            required:[true , 'El tipo es obligatorio'],
            trim:true
        },
        tipoEspecifico:{
            type:String,
            required:[true , 'El tipoESpecifico es obligatorio'],
            trim:true
        },
        precio:{
            type:Number,
            required:[true , 'El precio es obligatorio'],
            trim:true
        },
        descripcion:{
            type:String,
            required:[true , 'La descripcion es obligatorio'],
            trim:true
        },
        imagen:{
            type:String,
            required:[true , 'La imagen es obligatorio'],
            trim:true
        }
    }
);

const bebidas = mongoose.model('bebidas',bebidasSchema,'bebidas');

export default bebidas;