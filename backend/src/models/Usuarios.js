import mongoose from "mongoose";

const usuariosSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:[true , 'El nombre es obligatorio'],
            trim:true
        },
        direccion:{
            type:String,
            required:[true , 'La direccion es obligatoria'],
            trim:true
        },
        email:{
            type:String,
            required:[true , 'El email es obligatorio'],
            trim:true
        },
        password:{
            type:String,
            required:[true , 'La contrseña es obligatorio'],
            trim:true
        },
        rol:{
            type:String,
            required:[true , 'El rol es obligatorio'],
            default: 'USER'
        },
        estado:{
            type:Boolean,
            default: true
        }
    }
);

const usuarios = mongoose.model('usuarios',usuariosSchema);
export default usuarios;