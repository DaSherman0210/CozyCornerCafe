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
    const valorFinal = document.querySelector('.precioFinal');
    const cantidadValue = document.querySelector('.cantidad');
    const cantidadFactu = document.querySelector(".unidadesF");
    if(e.target.classList.contains("masCantidad")){
        const cantidad = Number(cantidadValue.textContent);
        const cantidad2 = Number(valorFinal.textContent);
        console.log(cantidad2);
        if (cantidad < 10) {
            cantidadValue.textContent = cantidad + 1
            cantidadFactu.textContent = cantidad + 1
            valorFinal.textContent = cantidad2 + 2000
        }
    }
    if (e.target.classList.contains("menosCantidad")) {
        const cantidad = Number(cantidadValue.textContent);
        if (cantidad > 1) {
            cantidadValue.textContent = cantidad - 1
            cantidadFactu.textContent = cantidad - 1
            valorFinal.textContent -= 2000
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
    const valorFinal = document.querySelector('.precioFinal');
    const cantidad2 = Number(valorFinal.textContent);
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

const toppingsContainer = document.querySelector(".toppings");

toppingsContainer.addEventListener('click', agregarToppings);

async function cargarToppings() {
    const toppings = await getToppings();
    toppings.forEach(topping => {
        const {nombre,precio} = topping;
        if (topping.checked) {
            cantidadTooping++
        }
        toppingsContainer.innerHTML +=`
        <div class="divTopping">
            <input class="textTopping" type="checkbox" nombre=${nombre} value="${precio}">${nombre}
        </div>
        `
    });
}

function agregarToppings(e) {
    e.preventDefault();
    if (e.target.classList.contains('textTopping')) {
        
        console.log(e.target.value);
        const nombre = e.target.getAttribute('nombre');
        console.log(nombre);
    }
}


//todo -- GENERACION DE PRECIO FINAL Y CARRITO -- todo//

const tarjetaCarrito = document.querySelector('.tarjetaCarrito');
let arrayCarro = [];

document.addEventListener('DOMContentLoaded',()=>{
    const getLocal = JSON.parse(localStorage.getItem('helados'));
    getLocal.forEach(carro => {
        const {nombre,precio} = carro;
        tarjetaCarrito.innerHTML += 
        `
        <div style="display: flex; justify-content: center; align-items: center;">
        <p style="font-size: 2rem; margin: 10px;"><strong>${nombre}</strong></p>
        <p>$${precio}</p>
        </div>
        `
    });

    const getBebidas = JSON.parse(localStorage.getItem('bebidas'));
        getBebidas.forEach(bebida => {
        const {nombre ,precio} =bebida;
        tarjetaCarrito.innerHTML +=
        `
        <div style="display: flex; justify-content: center; align-items: center;">
        <p style="font-size: 2rem; margin: 10px;"><strong>${nombre}</strong></p>
        <p>$${precio}</p>
        </div>
        `
    })

    const getPostres = JSON.parse(localStorage.getItem('postres'));
        getPostres.forEach(postre => {  
        const {nombre ,precio} =postre;
        tarjetaCarrito.innerHTML +=
        `
        <div style="display: flex; justify-content: center; align-items: center;">
        <p style="font-size: 2rem; margin: 10px;"><strong>${nombre}</strong></p>
        <p>$${precio}</p>
        </div>
        `
    })

    

})

const botonEnviar = document.querySelector('.comprarCarrito');
botonEnviar.addEventListener('click', comprar)

function comprar() {
    const getLocal = JSON.parse(localStorage.getItem('helados'));
    const getBebidas = JSON.parse(localStorage.getItem('bebidas'));
    const getPostres = JSON.parse(localStorage.getItem('postres'));
    const carreto = [
        getLocal,
        getBebidas,
        getPostres
    ]
    console.log(carreto);
    localStorage.setItem("carreto", JSON.stringify(carreto));
    window.location="../factura/factura.html"
}


const botonEnvio = document.querySelector('.botonCompraBebida');
botonEnvio.addEventListener('click', (e)=>{
    const tamañof = document.querySelector('.tamañoF');
    const tamaño = tamañof.textContent;
    const cantidad = Number(document.querySelector('.unidadesF').textContent);
    if (tamaño == "Pequeño") {
        const valorFinal = document.querySelector('.precioFinal');
        const cantidad2 = Number(valorFinal.textContent);
        valorFinal.textContent = cantidad2 + (500 * cantidad);
        
    }
    else if (tamaño == "Mediano"){
        const valorFinal = document.querySelector('.precioFinal');
        const cantidad2 = Number(valorFinal.textContent);
        valorFinal.textContent = cantidad2 + (800 * cantidad);
    }
    else if (tamaño == "Grande"){
        const valorFinal = document.querySelector('.precioFinal');
        const cantidad2 = Number(valorFinal.textContent);
        valorFinal.textContent = cantidad2 + (1200 * cantidad);
    }

    añadirCarrito(e);
})

function añadirCarrito(e) {
    e.preventDefault();
    const carritoDefault = {
        nombre: document.querySelector('.tituloBebida').textContent,
        tamaño: document.querySelector('.tamañoF').textContent,
        gramosAzucar: Number(document.querySelector('.azucarF').textContent),
        cantidad: Number(document.querySelector('.unidadesF').textContent),
        precio: Number(document.querySelector('.precioFinal').textContent),
        toppings: [
            {
                nombre: "Chispas de chocolate",
                precio: 200
            },
            {
                nombre: "Crema chantilli",
                precio: 400
            }
        ]
    }
    console.log(carritoDefault);
    arrayCarro = [ ...arrayCarro,carritoDefault];
    console.log(arrayCarro);
    inyectarCarro();
}

function cleanCards() {
    tarjetaCarrito.innerHTML = "";
}

function inyectarCarro() {
    const carroString = JSON.stringify(arrayCarro);
    localStorage.setItem( "carrito", carroString);
}



