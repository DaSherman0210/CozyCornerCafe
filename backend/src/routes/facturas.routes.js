import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import bebidas from "../models/Bebidas.js";
import {getFacturas,getFactura,postFactura,deleteFacturas,updateFactura} from "../controllers/facturas.controllers.js";

const router = Router();

router.get("/all",getFacturas);
router.get("/all/:id",getFactura);
router.post("/add",[
    check('nombreUsuario',"El nombre no es valido").not().isEmpty(),
    check('precioTotal',"La edad no es valida").not().isEmpty(),
    check('medioPago',"La funcion no es valida").not().isEmpty(),
    check('pedidos',"El telefono no es valido").not().isEmpty(),
    check('nombre').custom(async(nombre = '')=>{
        const existeBebida = await bebidas.findOne({nombre});
        if (!existeBebida) {
            throw new Error(`La bebida ${bebidas} no esta en la base de datos`)
        }
    }),
    validateDocuments
] ,postFactura);
router.delete("/del/:id",deleteFacturas);
router.patch("/upd/:id",updateFactura);

export default router;