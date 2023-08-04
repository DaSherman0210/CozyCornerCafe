import Router from "express";
import {check} from "express-validator";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getPostres,getPostre,postPostre,deletePostre,updatePostre} from "../controllers/postres.controllers.js";

const router = Router();

router.get("/all",getPostres);
router.get("/all/:id",getPostre);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check("nombre","El nombre no es valido").not().isEmpty(),
    check("precio","El precio no es valido").not().isEmpty(),
    check("descripcion","La descripcion no es valida").not().isEmpty(),
    check("imagen","La imagen no es valida").not().isEmpty(),
    validateDocuments
],postPostre);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deletePostre);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updatePostre);

export default router;