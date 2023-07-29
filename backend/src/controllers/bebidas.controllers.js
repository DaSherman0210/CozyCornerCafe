import bebidas from "../models/Bebidas.js"

const getBebidas = async (req,res) =>{
    try {
        const bebida = await bebidas.find();
        res.json(bebida);
    } catch (error) {
        console.log(error);
    }
};  

const getBebida = async (req,res) =>{
    try {
        const bebida = await bebidas.findOne({_id:req.params.id})
        res.json(bebida);
    } catch (error) {
        console.log(error);
    }
}

const postBebidas = async (req,res) =>{
    try {
        const {nombre,tipo,tipoEspecifico,precio,descripcion,imagen} = req.body;
        const bebida = new bebidas({nombre,tipo,tipoEspecifico,precio,descripcion,imagen});

        //? Validacion por nombre

        const existeBebida = await bebidas.findOne({nombre})
        if (existeBebida) {
            return res.status(400).json({
                msg: "Ya esta registrada esta bebida"
            });
        }

        const nuevaBebida = await bebida.save();
        res.json(nuevaBebida);
    } catch (error) {
        console.log(error);
    }
}

const deleteBebida = async (req,res) =>{
    try {
        await bebidas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateBebida = async (req,res) =>{
    try {
        const bebida = await bebidas.findOne({_id:req.params.id});
        if (req.body.nombre) {
            bebida.nombre = req.body.nombre; 
        }
        if (req.body.tipo) {
            bebida.tipo = req.body.tipo; 
        }
        if (req.body.tipoEspecifico) {
            bebida.tipoEspecifico = req.body.tipoEspecifico; 
        }
        if (req.body.precio) {
            bebida.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            bebida.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            bebida.imagen = req.body.imagen; 
        }
        await bebida.save();
        res.json(bebida);
    } catch (error) {
        console.log(error);
    }
}

export {getBebidas,getBebida,postBebidas,deleteBebida,updateBebida};