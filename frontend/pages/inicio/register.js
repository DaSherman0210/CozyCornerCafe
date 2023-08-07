
import { insertUsuarios } from "./API.js";

const formulario = document.querySelector('#agregarUsuarios');
formulario.addEventListener('submit', registrar);

async function registrar(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre');
    const direccion = document.querySelector('#direccion');
    const correo = document.querySelector('#email');
    const contraseña = document.querySelector('#password');

    const datos = {
        nombre : nombre.value,
        direccion : direccion.value,
        email : correo.value,
        password : contraseña.value
    };
    console.log(datos);


        const response = await insertUsuarios(datos)
        
        if (response) {
            alert("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = '../main/main.html';

            },1000)
            
        }

}