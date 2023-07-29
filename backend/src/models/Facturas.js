import mongoose from "mongoose";

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
        pedidos:{
            type:Array,
            required:[true , 'Los pedidos son obligatorio']
        }
    }
)

const facturas = mongoose.model('facturas',facturasSchema,'facturas');
export default facturas;