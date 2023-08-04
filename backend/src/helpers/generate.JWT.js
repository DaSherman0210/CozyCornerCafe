import  Jwt  from "jsonwebtoken";

const generateJWT = (uid = '')=> {
    return new Promise ((resolve,reject)=>{
        const payload = {uid};
        Jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn: "4h"
        }, (err,token)=>{
            if (err) {
                reject ("Porblemas al generar el json web token")
            }
            else {
                resolve (token)
            }
        })
    })
}

export default generateJWT;