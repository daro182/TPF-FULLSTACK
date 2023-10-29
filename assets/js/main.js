let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    user.classList.remove('active'); 
    navbar.classList.remove('active');  
}

let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
   user.classList.toggle('active');
   search.classList.remove('active');
   navbar.classList.remove('active');    
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

const header = document.querySelector('header');

// Función para cambiar el fondo del encabezado al hacer scroll
function handleScroll() {
    if (window.scrollY > 0) {
        // Cuando se ha desplazado, aplica un fondo de color sólido
        header.style.backgroundColor = '#1b0643'; // Reemplaza 'yourSolidColor' con el color que desees
    } else {
        // Cuando no se ha desplazado, el fondo es transparente
        header.style.backgroundColor = 'rgba(27, 6, 67, 0.2)';
    }
}

// Agrega un evento de desplazamiento para llamar a la función cuando se desplace
window.addEventListener('scroll', handleScroll);

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 5, // Muestra 5 elementos por pantalla
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});
$(document).ready(function(){
$(".item").click(function(){
let youtube_id = $(this).children("img").attr("data-id");
 console.log(youtube_id);
$(this).children(".youtube-icon")
.addClass("active").parent()
.siblings()
.children(".youtube-icon")
.removeClass("active")

 let newUrl = `https://www.youtube.com/embed/${youtube_id}`;
  $("#video_id").attr("src", newUrl);
  })
})

function inicializarMapa() {
  const centroMapa = { lat: -34.5464856, lng:-58.4878535 };   

  const opcionesMapa = {
      zoom: 13, 
      center: centroMapa, 
  };

  const mapa = new google.maps.Map(document.getElementById('map'), opcionesMapa);

}
