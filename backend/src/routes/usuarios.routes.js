import Router from "express";
import { check } from "express-validator";
import roles from "../models/Roles.js";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getUsuarios,getUsuario,postUsuario,deleteUsuario,updateUsuario} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/all",getUsuarios);
router.get("/all/:id",getUsuario);
router.post("/add",[
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('direccion',"La direccion no es avalida").not().isEmpty(),
    check('email',"EL correo no es valido").isEmail().notEmpty(),
    check('password',"El password no es valido").not().isEmpty(),
    check('rol').custom(async(rol = '')=>{
        const existeRol = await roles.findOne({rol});
        if (!existeRol) {
            throw new Error(`El rol ${rol} no esta en la base de datos`)
        }
    }),
    validateDocuments
],postUsuario);
router.delete("/del/:id",deleteUsuario);
router.patch("upd/:id",updateUsuario);

export default router;  