import mongoose from "mongoose";

const rolesSchema = mongoose.Schema(
    {
        rol:{
            type:String,
            required:[true , 'El rol es obligatorio']
        }
    }
)

const roles = mongoose.model('roles',rolesSchema,'roles');
export default roles;