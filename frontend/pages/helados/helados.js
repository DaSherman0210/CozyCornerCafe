import { getHelados } from "./api.js";

document.addEventListener('DOMContentLoaded', ()=>{
  getCards();
});
const cardsContainer = document.querySelector('.swiper-wrapper');

async function getCards () {
  const helados = await getHelados();
  helados.forEach((helado)=>{
    const {_id ,nombre,precio,descripcion,imagen} = helado;
    cardsContainer.innerHTML += `
    <div class="swiper-slide" style="background-image: url(../../assets/imgs/helados/${imagen}); background-repeat: no-repeat; background-size: cover; background-position:center;">
      <span class="nameHelado" value="${nombre}">${nombre}</span>
        <div>
          <p style="display:flex; gap: 10px;">
            ${descripcion}
            <svg width="304px" height="304px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#ffff" stroke-width="0.696"></circle> <path d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522" stroke="#ffff" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7V17" stroke="#ffff" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p class="precios">${precio}</p>
          </p>
          <a class="heladosButton btn btn-danger" precio="${precio}" nombre="${nombre}" href="#">Comprar</a>   
        </div>
      </div>
  `
  })
}

cardsContainer.addEventListener('click', guardarHelados);
let arrayCarro = [];

function guardarHelados(e) {
  e.preventDefault();
  if (e.target.classList.contains('heladosButton')) {
    const precio = e.target.getAttribute('precio');
    const nombre = e.target.getAttribute('nombre');
    const pedido = {
      precio,
      nombre
    };
    arrayCarro = [...arrayCarro,pedido];
    console.log(arrayCarro);
    JSON.stringify(localStorage.setItem("carro", arrayCarro));

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