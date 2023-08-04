import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import {getEmpleados,getEmpleado,postEmpleados,deleteEmpleados,updateEmpleados} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/all",getEmpleados);
router.get("/all/:id",getEmpleado);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('edad',"La edad no es valida").not().isEmpty(),
    check('funcion',"La funcion no es valida").not().isEmpty(),
    check('telefono',"El telefono no es valido").not().isEmpty(),
    check('direccion',"La ddireccion no es valida").not().isEmpty(),
    check('cedulaCiudadania',"La cedula de ciudadnia no es valida").not().isEmpty(),
    check('imagen',"La imagen no es valido").not().isEmpty(),
    validateDocuments
] ,postEmpleados);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteEmpleados);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateEmpleados);

export default router;