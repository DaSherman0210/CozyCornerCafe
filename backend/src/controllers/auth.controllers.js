import response  from "express";
import usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate.JWT.js";

const login = async (req,res = response)=>{
    const {email,password} = req.body;
    try {
        const usuario = await usuarios.findOne({email});
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario no es correcto"
            })
        }
        if (!usuario.estado) {
            return res.status(400).json({
                msg: "El usuario esta inactivo"
            })
        }

        const validatePassword = bcryptjs.compareSync(password,usuario.password);
        if (!validatePassword) {
            return res.status(400).json({
                msg: "Contrsaeña incorrecta"
            })
        }

        const token = await generateJWT(usuario.id);
        res.json({usuario,token});

    } catch (error) {
        console.log(error);
    }
}

export default login;