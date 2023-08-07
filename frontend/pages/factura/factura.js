document.addEventListener('DOMContentLoaded',cargarFactura);

function cargarFactura(e) {
    e.preventDefault();
    const factura = document.querySelector('.cargarDatos'); 
    const carretoString =  localStorage.getItem('carreto');
    const carreto = JSON.parse(carretoString);
    const carretoHelado = carreto[0];
    const carretoBebidas = carreto[1];
    const carretoPostre = carreto[2];


    let totalSuma = 0;

    carreto.forEach(subArray => {
    subArray.forEach(producto => {
        const precio = parseInt(producto.precio);
        totalSuma += precio;
    });
    });
    
    carretoHelado.forEach(elao => {
        const {nombre,precio} = elao;
        factura.innerHTML += 
        `
        <div style="display:flex;">
            <p>${nombre} ------ </p>
            <p>------ ${precio}</p>
        </div>
        `
    });

    carretoBebidas.forEach(bebida =>{
        const {nombre,precio}= bebida;
        factura.innerHTML += 
        `
        <div style="display:flex;">
            <p>${nombre} ------ </p>
            <p>------ ${precio}</p>
        </div>
        `
    });

    carretoPostre.forEach(postre =>{
        const {nombre,precio}= postre;
        factura.innerHTML += 
        `
        <div style="display:flex;">
            <p>${nombre} ------ </p>
            <p>------ ${precio}</p>
        </div>
        `
    });

    const h2 = document.querySelector(".h2o");
    h2.textContent = `TOTAL -------------------  ${totalSuma + 5000}`
    
}

const volverCasa = document.querySelector('.volverCasa');
volverCasa.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
    window.location="../main/main.html";
})