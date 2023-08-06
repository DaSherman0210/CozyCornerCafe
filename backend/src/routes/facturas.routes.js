import Router from "express";
import {check} from "express-validator";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import {validateDocuments} from "../middlewares/validate.documents.js"
import {getFacturas,getFactura,postFactura,deleteFacturas,updateFactura} from "../controllers/facturas.controllers.js";

const router = Router();

router.get("/all",getFacturas);
router.get("/all/:id",getFactura);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check('nombreUsuario',"El nombre no es valido").not().isEmpty(),
    check('precioTotal',"La precio total no es valida").not().isEmpty(),
    check('medioPago',"El medio de pago no es valida").not().isEmpty(),
    check('pedidos' , "Los pedidos ingresados no son validos").not().isEmpty(),
    validateDocuments
] ,postFactura);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteFacturas);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateFactura);

export default router;
