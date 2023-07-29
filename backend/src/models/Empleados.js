import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:[true , 'El nombre es obligatorio'],
            trim:true
        },
        edad:{
            type:Number,
            required:[true , 'La edad es obligatorio'],
            trim:true
        },
        funcion:{
            type:String,
            required:[true , 'La funcion es obligatorio'],
            trim:true
        },
        telefono:{
            type:Number,
            required:[true , 'El Telefono es obligatorio'],
            trim:true
        },
        direccion:{
            type:String,
            required:[true , 'El direccion es obligatorio'],
            trim:true
        },
        cedulaCiudadania:{
            type:Number,
            required:[true , 'La cedula de ciudadania es obligatorio'],
            trim:true
        },
        imagen:{
            type:String,
            required:[true , 'La imagen es obligatorio'],
            trim:true
        }
    }
)

const empleados = mongoose.model('empleados',empleadosSchema,'empleados');
export default empleados;