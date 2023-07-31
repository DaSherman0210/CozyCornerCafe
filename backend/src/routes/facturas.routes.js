import Router from "express";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js"
import bebidas from "../models/Bebidas.js";
import toppings from "../models/Toppings.js";
import {getFacturas,getFactura,postFactura,deleteFacturas,updateFactura} from "../controllers/facturas.controllers.js";

const router = Router();

router.get("/all",getFacturas);
router.get("/all/:id",getFactura);
router.post("/add",[
    check('nombreUsuario',"El nombre no es valido").not().isEmpty(),
    check('precioTotal',"La precio total no es valida").not().isEmpty(),
    check('medioPago',"El medio de pago no es valida").not().isEmpty(),
    check('pedidos').custom(async(pedidos = '')=>{
        for (let index = 0; index < pedidos.length; index++) {
            const existeBebida = await bebidas.findOne({ nombre: pedidos[index].nombre });
            if (!existeBebida) {
                throw new Error("La/s bebida/s no esta/n en la base de datos");
            }
            const topping = pedidos[index].toppings
            console.log(topping);
            for (let i = 0; i < topping.length; i++) {
                const existeTopping = await toppings.findOne({nombre: pedidos[index].toppings[index].nombre});
                if (!existeTopping) {
                    throw new Error('No se encuentran los toppings');
                }
            }
        }
    }),
    validateDocuments
] ,postFactura);
router.delete("/del/:id",deleteFacturas);
router.patch("/upd/:id",updateFactura);

export default router;
