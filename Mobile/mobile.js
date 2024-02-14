
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});


window.onscroll = () =>{
  menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}
var Swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  let icon = document.getElementById('dark-toggle');
  let body = document.body;

  icon.addEventListener('click', () =>{
    body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-sun');
  })

  // Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('date').innerHTML = currentYear;
