import Router from "express";
import {check} from "express-validator";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getHelados,getHelado,postHelado,deleteHelado,updateHelado} from "../controllers/helados.controllers.js";

const router = Router();

router.get("/all",getHelados);
router.get("/all/:id",getHelado);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check("nombre","El nombre no es valido"),
    check("precio","El precio no es valido").not().isEmpty(),
    check("descripcion","La descripcion no es valida").not().isEmpty(),
    check("imagen","La imagen no es valida").not().isEmpty(),
    validateDocuments
],postHelado);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteHelado);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateHelado);

export default router;