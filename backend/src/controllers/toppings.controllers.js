import toppings from "../models/Toppings.js"

const getToppings = async (req,res) =>{
    try {
        const topping = await toppings.find();
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
};  

const getTopping = async (req,res) =>{
    try {
        const topping = await toppings.findOne({_id:req.params.id})
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
}

const postTopping = async (req,res) =>{
    try {
        const {nombre,tipo,tipoEspecifico,precio,descripcion,imagen} = req.body;
        const topping = new toppings({nombre,tipo,tipoEspecifico,precio,descripcion,imagen});

        //? Validacion por nombre

        const existetopping = await toppings.findOne({nombre})
        if (existetopping) {
            return res.status(400).json({
                msg: "Ya esta registrada esta bebida"
            });
        }

        const nuevoTopping = await topping.save();
        res.json(nuevoTopping);
    } catch (error) {
        console.log(error);
    }
}

const deleteTopping = async (req,res) =>{
    try {
        await toppings.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateTopping = async (req,res) =>{
    try {
        const topping = await toppings.findOne({_id:req.params.id});
        if (req.body.nombre) {
            topping.nombre = req.body.nombre; 
        }
        if (req.body.tipo) {
            topping.tipo = req.body.tipo; 
        }
        if (req.body.tipoEspecifico) {
            topping.tipoEspecifico = req.body.tipoEspecifico; 
        }
        if (req.body.precio) {
            topping.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            topping.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            topping.imagen = req.body.imagen; 
        }
        await topping.save();
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
}

export {getToppings,getTopping,postTopping,deleteTopping,updateTopping};