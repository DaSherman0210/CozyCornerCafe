import mongoose from "mongoose";

const toppingSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:[true , 'El nombre es obligatorio'],
            trim:true
        },
        precio:{
            type:Number,
            required:[true , 'El precio es obligatorio'],
            trim:true
        }
    }
);

const toppings = mongoose.model('toppings',toppingSchema,'toppings');
export default toppings;