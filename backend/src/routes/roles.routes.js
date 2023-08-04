import Router from "express";
import {check} from "express-validator";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import {validateDocuments} from "../middlewares/validate.documents.js"
import {getRoles,getRol,postRol,deleteRol,updateRoles} from "../controllers/roles.controllers.js";

const router = Router();

router.get("/all",getRoles);
router.get("/all/:id",getRol);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check('rol',"El rol no es valido").not().isEmpty(),
    validateDocuments
] ,postRol);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteRol);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateRoles);

export default router;