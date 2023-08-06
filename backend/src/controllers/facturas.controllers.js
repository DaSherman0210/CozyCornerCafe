import facturas from "../models/Facturas.js"

const getFacturas = async (req,res) =>{
    try {
        const factura = await facturas.find()
                                    /* .populate('nombreUsuario' , 'nombre')
                                    .populate('pedidos.bebidas.id', 'nombre') */
        res.json(factura);
    } catch (error) {
        console.log(error);
    }
};  

const getFactura = async (req,res) =>{
    try {
        const {nombreUsuario} = req.params;
        const factura = await facturas.findOne(nombreUsuario);
                                
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
        if (req.body.nombreUsuario) {
            factura.nombreUsuario = req.body.nombreUsuario; 
        }
        if (req.body.tipo) {
            factura.tipo = req.body.tipo; 
        }
        if (req.body.precioTotal) {
            factura.precioTotal = req.body.precioTotal; 
        }
        if (req.body.medioPago) {
            factura.medioPago = req.body.medioPago; 
        }
        if (req.body.pedidos) {
            factura.pedidos = req.body.pedidos; 
        }
        await factura.save();
        res.json(factura);
    } catch (error) {
        console.log(error);
    }
}

export {getFacturas,getFactura,postFactura,deleteFacturas,updateFactura};