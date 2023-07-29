import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import {getBebidas,getBebida,postBebidas,deleteBebida,updateBebida} from "../controllers/bebidas.controllers.js";

const router = Router();

router.get("/all",getBebidas);
router.get("/all/:id",getBebida);
router.post("/add",[
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('tipo',"El tipo no es valido").not().isEmpty(),
    check('tipoEspecifico',"El tipo especifico no es valido").not().isEmpty(),
    check('precio',"El precio no es valido").not().isEmpty(),
    check('descripcion',"La descripcion no es valido").not().isEmpty(),
    check('imagen',"La imagen no es valido").not().isEmpty(),
    validateDocuments
] ,postBebidas);
router.delete("/del/:id",deleteBebida);
router.patch("/upd/:id",updateBebida);

export default router;