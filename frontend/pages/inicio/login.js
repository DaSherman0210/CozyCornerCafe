import { validacion } from "./API.js";


const formulario = document.querySelector('#validarUsuario');
formulario.addEventListener('submit', validateLogin);

async function validateLogin(e) {
    e.preventDefault();
    const correo = document.querySelector('#email');
    const contraseña = document.querySelector('#password');

    const datos = {
        email : correo.value,
        password : contraseña.value,
    };
    console.log(datos);

 
        const response = await validacion(datos);

        if (response) {
            alert("Bienvenido de nuevo")
            setTimeout(()=>{
                window.location = '../main/main.html';

            },1000)


       }else{
        alert("Correo o contraseña incorrectos")
            setTimeout(()=>{
                window.location = 'login.html';

            },1000)
       }

}