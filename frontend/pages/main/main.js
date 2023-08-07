import { getBebidas } from "./api.js";

document.addEventListener('DOMContentLoaded', ()=>{
  getCards();
});
const cardsContainer = document.querySelector('.swiper-wrapper');
 
async function getCards () {
  const bebidas = await getBebidas();
  bebidas.forEach((bebida)=>{
    const {nombre,tipo,precio,descripcion,imagen} = bebida;
    cardsContainer.innerHTML += `
    <div class="swiper-slide" style="background-image: url(../../assets/imgs/bebidas/${imagen}); background-repeat: no-repeat; background-size: cover; background-position:center;">
        <h2>${tipo}</h2>
        <span>${nombre}</span>
        <div>
          <p style="display:flex; gap: 20px;">
            ${descripcion}
            <svg width="304px" height="304px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#ffff" stroke-width="0.696"></circle> <path d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522" stroke="#ffff" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7V17" stroke="#ffff" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            ${precio}
          </p>
          <a class="bebidasButton btn btn-danger" precio="${precio}" nombre="${nombre}" href="../carrito/carrito.html">Comprar</a>
        </div>
      </div>
  `
  })
  
}

cardsContainer.addEventListener('click', guardarBebidas);
let arrayCarro = [];

function guardarBebidas(e) {
  e.preventDefault();
  if (e.target.classList.contains('bebidasButton')) {
    const precio = e.target.getAttribute('precio');
    const nombre = e.target.getAttribute('nombre');
    const pedido = {
      precio,
      nombre
    };
    arrayCarro = [...arrayCarro,pedido];
    console.log(arrayCarro);
    localStorage.setItem("bebidas", JSON.stringify(arrayCarro));

  }
}

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


