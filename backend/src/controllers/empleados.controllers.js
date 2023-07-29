import empleados from "../models/Empleados.js"

const getEmpleados = async (req,res) =>{
    try {
        const empleado = await empleado.find();
        res.json(empleado);
    } catch (error) {
        console.log(error);
    }
};  

const getEmpleado = async (req,res) =>{
    try {
        const empleado = await empleado.findOne({_id:req.params.id})
        res.json(empleado);
    } catch (error) {
        console.log(error);
    }
}

const postEmpleados = async (req,res) =>{
    try {
        const {nombre,edad,funcion,telefono,direccion,cedulaCiudadania,imagen} = req.body;
        const empleado = new empleados({nombre,edad,funcion,telefono,direccion,cedulaCiudadania,imagen});

        //? Validacion por nombre

        const existeEmpleado = await empleados.findOne({cedulaCiudadania})
        if (existeEmpleado) {
            return res.status(400).json({
                msg: "Ya esta registrado este usuario"
            });
        }

        const nuevoEmpleado = await empleado.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error);
    }
}

const deleteEmpleados = async (req,res) =>{
    try {
        await empleados.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
} 

const updateEmpleados = async (req,res) =>{
    try {
        const empleado = await empleados.findOne({_id:req.params.id});
        if (req.body.nombre) {
            empleado.nombre = req.body.nombre; 
        }
        if (req.body.tipo) {
            empleado.tipo = req.body.tipo; 
        }
        if (req.body.tipoEspecifico) {
            empleado.tipoEspecifico = req.body.tipoEspecifico; 
        }
        if (req.body.precio) {
            empleado.precio = req.body.precio; 
        }
        if (req.body.descripcion) {
            empleado.descripcion = req.body.descripcion; 
        }
        if (req.body.imagen) {
            empleado.imagen = req.body.imagen; 
        }
        await empleado.save();
        res.json(empleado);
    } catch (error) {
        console.log(error);
    }
}

export {getEmpleados,getEmpleado,postEmpleados,deleteEmpleados,updateEmpleados};