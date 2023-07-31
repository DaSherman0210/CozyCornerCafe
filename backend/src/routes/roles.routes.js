import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import {getRoles,getRol,postRol,deleteRol,updateRoles} from "../controllers/roles.controllers.js";

const router = Router();

router.get("/all",getRoles);
router.get("/all/:id",getRol);
router.post("/add",[
    check('rol',"El rol no es valido").not().isEmpty(),
    validateDocuments
] ,postRol);
router.delete("/del/:id",deleteRol);
router.patch("/upd/:id",updateRoles);

export default router;