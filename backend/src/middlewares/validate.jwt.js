import {response , request} from "express";
import jwt from "jsonwebtoken";
import usuarios from "../models/Usuarios.js";

const validateJWT = async (req = request, res= response , next) => {
    const token = req.header('x-api-token-jwt');

    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }

    try {
        const {uid} = jwt.verify(token,process.env.SECRET_OR_PRIVATE_KEY);
        const usuario = await usuarios.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: "Json Web Token no valido - usuario no existe en la base de datos"
            })
        }

        if (!usuario.estado) {
            return res.status(401).json({
                msg: "Token no valido - Usuario con estado false"
            })
        }

        req.usuario = usuario;
        console.log("Req usuario en validate" , req.usuario);
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no valido"
        })
    }
}

export default validateJWT;