import Router from "express";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getToppings,getTopping,postTopping,deleteTopping,updateTopping} from "../controllers/toppings.controllers.js";

const router =  Router();

router.get("/all",getToppings);
router.get("/all/:id",getTopping);
router.post("/add",[
    check('nombre',"El nombre del topping no es valido").not().isEmpty(),
    check('precio',"El precio no es valido").not().isEmpty(),
    validateDocuments
],postTopping);
router.delete("/del/:id",deleteTopping);
router.patch("/upd/:id",updateTopping);

export default router;