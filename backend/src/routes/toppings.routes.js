import Router from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getToppings,getTopping,postTopping,deleteTopping,updateTopping} from "../controllers/toppings.controllers.js";

const router =  Router();

router.get("/all",getToppings);
router.get("/all/:id",getTopping);
router.post("/add",[
    validateJWT,
    isAdminRole,
    check('nombre',"El nombre del topping no es valido").not().isEmpty(),
    check('precio',"El precio no es valido").not().isEmpty(),
    validateDocuments
],postTopping);
router.delete("/del/:id",[
    validateJWT,
    isAdminRole
],deleteTopping);
router.patch("/upd/:id",[
    validateJWT,
    isAdminRole
],updateTopping);

export default router;