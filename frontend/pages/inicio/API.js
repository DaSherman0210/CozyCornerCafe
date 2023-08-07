// ? ------------------------ VALIDACIONES API --------------------------------


const urlValidacion = "http://localhost:7002/api/auth"



export const validacion = async (login) => {
    try {
        const response = await fetch(`${urlValidacion}/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};


// ---------------------REGISTROS USUARIOS API------------------

const urlUsuarios = "http://localhost:7002/api/usuarios"


export async function insertUsuarios(data){
    try {
        const novedades = await fetch(`${urlUsuarios}/add`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
            
        });

        const response = await novedades.json();
        return response
    } catch (error) {
        console.log(error);
    }
}
