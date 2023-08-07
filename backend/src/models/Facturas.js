import mongoose, { Schema } from "mongoose";

const toppingsSchema = mongoose.Schema(
    {
        id:{
            type: Schema.Types.ObjectId,
            ref: 'toppings',
            required: true
        }
    }
); 

const bebidasSchema = mongoose.Schema(
    {
        id:{
            type: Schema.Types.ObjectId,
            ref: 'bebidas',
            required: true
        },
        precio:{
            type:Number,
            required:true,
            trim:true
        },
        size:{
            type: String,
            required: true,
            trim: true
        },
        gramosAzucar:{
            type: Number,
            required: true,
            trim: true
        },
        cantidad:{
            type: Number,
            required: true,
            trim:true
        },
        toppings:[toppingsSchema]
    }
);

const heladosSchema = mongoose.Schema(
    {
        id:{
            type: Schema.Types.ObjectId,
            ref: 'helados',
            required: true
        },
        precio:{
            type:Number,
            required:true,
            trim:true
        },
        size:{
            type: String,
            required: true,
            trim: true
        },
        gramosAzucar:{
            type: Number,
            required: true,
            trim: true
        },
        cantidad:{
            type: Number,
            required: true,
            trim:true
        },
        toppings:[toppingsSchema]
    }
);

const postresSchema = mongoose.Schema(
    {
        id:{
            type: Schema.Types.ObjectId,
            ref: 'postres',
            required: true
        },
        precio:{
            type:Number,
            required:true,
            trim:true
        },
        size:{
            type: String,
            required: true,
            trim: true
        },
        gramosAzucar:{
            type: Number,
            required: true,
            trim: true
        },
        cantidad:{
            type: Number,
            required: true,
            trim:true
        },
        toppings:[toppingsSchema]
    }
);


const facturasSchema = mongoose.Schema(
    {
        nombreUsuario:{
            type:Schema.Types.ObjectId,
            ref: 'usuarios',
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
            bebidas:[bebidasSchema],
            postres:[postresSchema],
            helados:[heladosSchema]
        }
    }
)

const facturas = mongoose.model('facturas',facturasSchema,'facturas');
export default facturas;