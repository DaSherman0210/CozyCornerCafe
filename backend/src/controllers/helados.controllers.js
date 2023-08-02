import helados from "../models/Helados.js"

const getHelados = async (req,res) =>{
    try {
        const helado = await helados.find();
        res.json(helado);
    } catch (error) {
        console.log(error);
    }
};  

const getHelado = async (req,res) =>{
    try {
        const helado = await helados.findOne({_id:req.params.id})
        res.json(helado);
    } catch (error) {
        console.log(error);
    }
}

const postHelado = async (req,res) =>{
    try {
        const {nombre,precio,descripcion,imagen} = req.body;
        const helado = new helados({nombre,precio,descripcion,imagen});

        //? Validacion por nombre

        const existeHelado = await helados.findOne({nombre})
        if (existeHelado) {
            return res.status(400).json({
                msg: "Ya esta registrado este helado"
            });
        }

        const nuevoHelado = await helado.save();
        res.json(nuevoHelado);
    } catch (error) {
        console.log(error);
    }
}

const deleteHelado = async (req,res) =>{
    try {
        await helados.deleteOne({_id:req.params.id});
        res.status(204).send({msg:"Eliminado con exito"});
    } catch (error) {
        console.log(error);
    }
} 

const updateHelado = async (req,res) =>{
    try {
        const helado = await helados.findOne({_id:req.params.id});
        if (req.body.nombre) {
            helado.nombre = req.body.nombre; 
        }
        if (req.body.precio) {
            helado.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            helado.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            helado.imagen = req.body.imagen; 
        }
        await helado.save();
        res.json(helado);
    } catch (error) {
        console.log(error);
    }
}

export {getHelados,getHelado,postHelado,deleteHelado,updateHelado};