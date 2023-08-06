//* IMPORTACIONES

import { getToppings } from "./api.js";

//todo -- VALIDACION AZUCAR -- todo//

const divAzucar = document.querySelector(".azucarito");

divAzucar.addEventListener("click",(e)=>{
    validacionAzucar(e);
})

function validacionAzucar(e) {
    const azucarValue = document.querySelector('.porcentaje');
    const azucarFactu = document.querySelector(".azucarF");
    if (e.target.classList.contains("progreso")) {
        const azuca = Number(azucarValue.textContent);
        if (azuca < 100) {
            azucarValue.textContent = azuca + 10;
            azucarFactu.textContent = azuca + 10;
        }
    }
    else if(e.target.classList.contains("decadence")){
        const azuca = Number(azucarValue.textContent);
        if (azuca > 0) {
            azucarValue.textContent = azuca - 10;
            azucarFactu.textContent = azuca - 10;
        }
    }
}

//todo -- VALIDACION CANTIDAD BEBIDAS -- todo//

const divCantidad = document.querySelector(".divCantidad");

divCantidad.addEventListener("click",(e)=>{
    validacionCantidad(e);
})

function validacionCantidad(e){
    const cantidadValue = document.querySelector('.cantidad');
    const cantidadFactu = document.querySelector(".unidadesF");
    if(e.target.classList.contains("masCantidad")){
        const cantidad = Number(cantidadValue.textContent);
        if (cantidad < 10) {
            cantidadValue.textContent = cantidad + 1
            cantidadFactu.textContent = cantidad + 1
        }
    }
    else if (e.target.classList.contains("menosCantidad")) {
        const cantidad = Number(cantidadValue.textContent);
        if (cantidad > 1) {
            cantidadValue.textContent = cantidad - 1
            cantidadFactu.textContent = cantidad - 1
        }
    }
}

//todo -- VALIDACION TAMAÑO BEBIDA -- todo//

const divTamaño = document.querySelector(".divTamaño");

divTamaño.addEventListener("click",(e)=>{
    validacionTamaño(e);
})

function validacionTamaño(e){
    const pequeño = document.querySelector(".p");
    const mediano = document.querySelector(".m");
    const grande = document.querySelector(".g");
    const pequenito = document.querySelector(".pequenito");
    const medianito = document.querySelector(".medianito");
    const grandesito = document.querySelector(".grandesito");
    const tamañoFact = document.querySelector(".tamañoF");
    if (pequeño.addEventListener("click" ,(e)=>{
        if (medianito && grandesito) {
            tamañoFact.textContent = "Pequeño";
            if (e.target.classList.contains("peque")) {
                e.target.classList.remove("peque");
                e.target.classList.add("pequenito");
            }
            else if (e.target.classList.contains("pequenito")){
                e.target.classList.remove("pequenito");
                e.target.classList.add("peque");
            }
        }
    })){}
    else if(mediano.addEventListener("click",(e)=>{
        if (pequenito && grandesito) {
            tamañoFact.textContent = "Mediano";
            if (e.target.classList.contains("medi")){
                e.target.classList.remove("medi");
                e.target.classList.add("medianito");
            }
            else if(e.target.classList.contains("medianito")){
                e.target.classList.remove("medianito");
                e.target.classList.add("medi");
            }
        }
    })){}
    else if (grande.addEventListener("click",(e)=>{
        if (medianito && pequenito) {
            tamañoFact.textContent = "Grande";
            if(e.target.classList.contains("gran")){
                e.target.classList.remove("gran");
                e.target.classList.add("grandesito");
            }
            else if (e.target.classList.contains("grandesito")){
                e.target.classList.remove("grandesito");
                e.target.classList.add("gran");
            }   
        }
    })){}
}

//todo -- CONSUMO API TOPPINGS -- todo//

document.addEventListener("DOMContentLoaded",()=>{
    cargarToppings();
})

async function cargarToppings() {
    const cantidadTooping = 0;
    const toppingsContainer = document.querySelector(".toppings");
    const toppings = await getToppings();
    toppings.forEach(topping => {
        const {nombre,precio} = topping;
        if (topping.checked) {
            cantidadTooping++
        }
        toppingsContainer.innerHTML +=`
        <div class="divTopping">
            <input type="checkbox" value="${precio}" name="" id="topping">
            <p class="textTopping">${nombre}</p>
        </div>
        `
    });
    console.log(cantidadTooping);
}

//todo -- GENERACION DE PRECIO FINAL -- todo//

let precioTotal = 0

async function aumentarPrecio() {
    const precioFinal = document.querySelector('.precioFinal');
    const cantidadValue = document.querySelector('.cantidad');

    console.log();

    if (cantidadValue.va) {
        
    }

}