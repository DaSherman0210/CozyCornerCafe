import  Router  from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js";
import login from "../controllers/auth.controllers.js";


const router = Router();

router.post("/login",[
    check("email", "El email es obligatorio").isEmail(),
    check("password" , "El password es obligatorio").not().isEmpty(),
    validateDocuments
],login);

export default router;