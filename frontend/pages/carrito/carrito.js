//todo -- VALIDACION AZUCAR -- todo//

const divAzucar = document.querySelector(".azucarito");

divAzucar.addEventListener("click",(e)=>{
    validacionAzucar(e);
})

function validacionAzucar(e) {
    const azucarValue = document.querySelector('.porcentaje');
    if (e.target.classList.contains("progreso")) {
        const azuca = Number(azucarValue.textContent);
        if (azuca < 100) {
            azucarValue.textContent = azuca + 10;
        }
    }
    else if(e.target.classList.contains("decadence")){
        const azuca = Number(azucarValue.textContent);
        if (azuca > 0) {
            azucarValue.textContent = azuca - 10;
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
    if(e.target.classList.contains("masCantidad")){
        const cantidad = Number(cantidadValue.textContent);
        if (cantidad < 10) {
            cantidadValue.textContent = cantidad + 1
        }
    }
    else if (e.target.classList.contains("menosCantidad")) {
        const cantidad = Number(cantidadValue.textContent);
        if (cantidad > 1) {
            cantidadValue.textContent = cantidad - 1
        }
    }
}