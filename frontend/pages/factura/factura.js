document.addEventListener('DOMContentLoaded',cargarFactura);

function cargarFactura(e) {
    e.preventDefault();
    const factura = document.querySelector('.cargarDatos'); 
    const carretoString =  localStorage.getItem('carreto');
    const carreto = JSON.parse(carretoString);
    const carretoHelado = carreto[0];
    const carretoBebidas = carreto[1];
    const carretoPostre = carreto[2];


    console.log(carreto);
    let totalSuma = 0;

    carreto.forEach(subArray => {
        if (Array.isArray(subArray)) { // Verificar si es un sub-array válido
            subArray.forEach(producto => {
                if (producto && producto.precio) { // Verificar si el objeto tiene precio
                const precio = parseInt(producto.precio);
                totalSuma += precio;
                }
            });
        }
    });
    
    if (carretoHelado) {
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
    }

    if (carretoBebidas) {
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
    }

    if (carretoPostre) {
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
    }
    

    const h2 = document.querySelector(".h2o");
    h2.textContent = `TOTAL -------------------  ${totalSuma + 5000}`
    
}

const volverCasa = document.querySelector('.volverCasa');
volverCasa.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
    window.location="../main/main.html";
})