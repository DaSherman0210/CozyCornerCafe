import roles from "../models/Roles.js"

const getRoles = async (req,res) =>{
    try {
        const rol = await roles.find();
        res.json(rol);
    } catch (error) {
        console.log(error);
    }
};  

const getRol = async (req,res) =>{
    try {
        const rol = await roles.findOne({_id:req.params.id})
        res.json(rol);
    } catch (error) {
        console.log(error);
    }
}

const postRol = async (req,res) =>{
    try {
        const {rol} = req.body;
        const role = new roles({rol});
        const nuevoRol = await role.save();
        res.json(nuevoRol);
    } catch (error) {
        console.log(error);
    }
}

const deleteRol = async (req,res) =>{
    try {
        await roles.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateRoles = async (req,res) =>{
    try {
        const role = await roles.findOne({_id:req.params.id});
        if (req.body.rol) {
            role.rol = req.body.rol; 
        }
        await role.save();
        res.json(role);
    } catch (error) {
        console.log(error);
    }
}

export {getRoles,getRol,postRol,deleteRol,updateRoles};