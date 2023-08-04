import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import {getBebidas,getBebida,postBebidas,deleteBebida,updateBebida} from "../controllers/bebidas.controllers.js";

const router = Router();

router.get("/all",getBebidas);
router.get("/all/:id",getBebida);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('tipo',"El tipo no es valido").not().isEmpty(),
    check('tipoEspecifico',"El tipo especifico no es valido").not().isEmpty(),
    check('precio',"El precio no es valido").not().isEmpty(),
    check('descripcion',"La descripcion no es valido").not().isEmpty(),
    check('imagen',"La imagen no es valido").not().isEmpty(),
    validateDocuments
] ,postBebidas);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteBebida);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateBebida);

export default router;