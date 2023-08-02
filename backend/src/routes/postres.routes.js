import Router from "express";
import {check} from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import {getPostres,getPostre,postPostre,deletePostre,updatePostre} from "../controllers/postres.controllers.js";

const router = Router();

router.get("/all",getPostres);
router.get("/all/:id",getPostre);
router.post("/add",[
    check("nombre","El nombre no es valido").not().isEmpty(),
    check("precio","El precio no es valido").not().isEmpty(),
    check("descripcion","La descripcion no es valida").not().isEmpty(),
    check("imagen","La imagen no es valida").not().isEmpty(),
    validateDocuments
],postPostre);
router.delete("/del/:id",deletePostre);
router.patch("/upd/:id",updatePostre);

export default router;