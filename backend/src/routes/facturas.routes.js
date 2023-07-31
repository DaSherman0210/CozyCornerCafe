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
    check('precioTotal',"La precio total no es valida").not().isEmpty(),
    check('medioPago',"El medio de pago no es valida").not().isEmpty(),
    check('pedidos').custom(async(pedidos = '')=>{
        for (let index = 0; index < pedidos.length; index++) {
            const existeBebida = await bebidas.findOne([pedidos.nombre]);
            console.log(1);
            if (!existeBebida) {
                throw new Error(`La bebida ${nombre} y tampoco ${nombre} no esta en la base de datos`)
            }
        }
    }),
    validateDocuments
] ,postFactura);
router.delete("/del/:id",deleteFacturas);
router.patch("/upd/:id",updateFactura);

export default router;