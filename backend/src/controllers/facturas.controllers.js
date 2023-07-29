import facturas from "../models/Facturas.js"

const getFacturas = async (req,res) =>{
    try {
        const factura = await facturas.find();
        res.json(factura);
    } catch (error) {
        console.log(error);
    }
};  

const getFactura = async (req,res) =>{
    try {
        const factura = await facturas.findOne({_id:req.params.id})
        res.json(factura);
    } catch (error) {
        console.log(error);
    }
}

const postFactura = async (req,res) =>{
    try {
        const {nombreUsuario,precioTotal,medioPago,pedidos} = req.body;
        const factura = new facturas({nombreUsuario,precioTotal,medioPago,pedidos});
        const nuevaFactura = await factura.save();
        res.json(nuevaFactura);
    } catch (error) {
        console.log(error);
    }
}

const deleteFacturas = async (req,res) =>{
    try {
        await facturas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateFactura = async (req,res) =>{
    try {
        const factura = await facturas.findOne({_id:req.params.id});
        if (req.body.nombre) {
            factura.nombre = req.body.nombre; 
        }
        if (req.body.tipo) {
            factura.tipo = req.body.tipo; 
        }
        if (req.body.tipoEspecifico) {
            factura.tipoEspecifico = req.body.tipoEspecifico; 
        }
        if (req.body.precio) {
            factura.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            factura.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            factura.imagen = req.body.imagen; 
        }
        await factura.save();
        res.json(factura);
    } catch (error) {
        console.log(error);
    }
}

export {getFacturas,getFactura,postFactura,deleteFacturas,updateFactura};