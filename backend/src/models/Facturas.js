import mongoose, { Schema } from "mongoose";

const facturasSchema = mongoose.Schema(
    {
        nombreUsuario:{
            type:String,
            required:[true , 'El nombre es obligatorio'],
            trim:true
        },
        precioTotal:{
            type:Number,
            required:[true , 'El precio es obligatorio'],
            trim:true
        },
        medioPago:{
            type:String,
            required:[true , 'El medio de pago es obligatorio'],
            trim:true
        },
        pedidos:[{
            bebidas:{
                type:Schema.Types.ObjectId,
                ref: ["bebidas","helados","postres"],
                required:[true , 'El nombre es obligatorio'],
                trim:true
            }
        }]
    }
)

const facturas = mongoose.model('facturas',facturasSchema,'facturas');
export default facturas;