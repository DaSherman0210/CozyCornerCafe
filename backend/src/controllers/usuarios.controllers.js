import usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs";

const getUsuarios = async (req,res) =>{
    try {
        const usuario = await usuarios.find();
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
};  

const getUsuario = async (req,res) =>{
    try {
        const usuario = await usuarios.findOne({_id:req.params.id})
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

const postUsuario = async (req,res) =>{
    try {
        const {nombre,direccion,email,password,rol,estado} = req.body;
        const usuario = new usuarios({nombre,direccion,email,password,rol,estado});

        //? Validacion por nombre

        const existeUsuario = await usuarios.findOne({nombre})
        if (existeUsuario) {
            return res.status(400).json({
                msg: "Ya esta registrada este usuario"
            });
        }

        //? Encriptacion de contraseña

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        const nuevaUsuario = await usuario.save();
        res.json(nuevaUsuario);
    } catch (error) {
        console.log(error);
    }
}

const deleteUsuario = async (req,res) =>{
    try {
        await usuarios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateUsuario = async (req,res) =>{
    try {
        const usuario = await usuarios.findOne({_id:req.params.id});
        if (req.body.nombre) {
            usuario.nombre = req.body.nombre; 
        }
        if (req.body.direccion) {
            usuario.direccion = req.body.direccion; 
        }
        if (req.body.email) {
            usuario.email = req.body.email; 
        }
        if (req.body.password) {
            usuario.password = req.body.password; 
        }
        if (req.body.rol) {
            usuario.rol = req.body.rol; 
        }
        if (req.body.estado) {
            usuario.estado = req.body.estado; 
        }
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

export {getUsuarios,getUsuario,postUsuario,deleteUsuario,updateUsuario};