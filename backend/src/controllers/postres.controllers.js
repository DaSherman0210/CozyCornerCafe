import postres from "../models/Postres.js"

const getPostres = async (req,res) =>{
    try {
        const postre = await postres.find();
        res.json(postre);
    } catch (error) {
        console.log(error);
    }
};  

const getPostre = async (req,res) =>{
    try {
        const postre = await postres.findOne({_id:req.params.id})
        res.json(postre);
    } catch (error) {
        console.log(error);
    }
}

const postPostre = async (req,res) =>{
    try {
        const {nombre,precio,descripcion,imagen} = req.body;
        const postre = new postres({nombre,precio,descripcion,imagen});

        //? Validacion por nombre

        const existePostre = await postres.findOne({nombre})
        if (existePostre) {
            return res.status(400).json({
                msg: "Ya esta registrado este empleado"
            });
        }

        const nuevoPostre = await postres.save();
        res.json(nuevoPostre);
    } catch (error) {
        console.log(error);
    }
}

const deletePostre = async (req,res) =>{
    try {
        await postres.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updatePostre = async (req,res) =>{
    try {
        const postre = await postres.findOne({_id:req.params.id});
        if (req.body.nombre) {
            postre.nombre = req.body.nombre; 
        }
        if (req.body.precio) {
            postre.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            postre.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            postre.imagen = req.body.imagen; 
        }
        await postre.save();
        res.json(postre);
    } catch (error) {
        console.log(error);
    }
}

export {getPostres,getPostre,postPostre,deletePostre,updatePostre};