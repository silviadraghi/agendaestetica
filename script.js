 //funcionalidades para slider

const sliderContainer = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.imagen-slider');
const totalImages = sliderImages.length;
 
let currentIndex = 0;


function showNextImage() {
    sliderImages[currentIndex].style.display = 'none';
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    sliderImages[currentIndex].style.display = 'block';
  }
  
  
  function startTimer() {
     sliderImages[currentIndex].style.display = 'block';
      setInterval(showNextImage, 5000);
  }
  
  window.addEventListener('load', startTimer);
  
   
const navBar = document.querySelector("#nav-bar");
const botonCerrar =document.querySelector("#boton-cerrar");
const botonesBarra = document.querySelectorAll(".link")
const buttonNavBarOpen = document.querySelector('#btn-nav-bar')

buttonNavBarOpen.addEventListener('click', function () {
    navBar.classList.add('nav-active')
  })
botonCerrar.addEventListener("click", () =>{
    navBar.classList.remove("nav-active")
})

botonesBarra.forEach((boton) =>{
  boton.addEventListener("click", () =>{
    navBar.classList.remove("nav-active")
  })
})

//funcion para desleccionar el input del newsletter

//validacion contacto
const nameError = document.getElementById('name-error')
const telError = document.getElementById('tel-error')
const emailError = document.getElementById('email-error')
const msgError = document.getElementById('msg-error')
const submitError = document.getElementById('submit-error')

function validateName() {
  let name = document.getElementById('nombre').value;

  if(name.length == 0){
    nameError.innerHTML = 'Completar nombre'
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Escribir nombre completo';
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-check"></i>';
  return true;
}

function validateTel() {
  let telefono = document.getElementById('telefono').value;

  if(telefono.length == 0){
    telError.innerHTML = 'Completar telefono'
    return false;
  }
  if(telefono.length !== 10){
    telError.innerHTML = 'Minimo de 10 digitos'
    return false;
  }
  if(!telefono.match(/^[0-9]{10}$/)){
    telError.innerHTML = 'Solo numeros porfavor';
    return false;
  }
  telError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validateEmail() {
  let email = document.getElementById('email').value;

  if(email.length == 0) {
    emailError.innerHTML = 'Completar email';
    return false
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalido';
    return false
  }
  emailError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validateMsg() {
  let mensaje = document.getElementById('mensaje').value;
  let required = 0;
  let left = required + mensaje.length;
  
  if(left < 20) {
    msgError.innerHTML = left + ' / 20';
    return false;
  }

  msgError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validateForm() {
  if(!validateName() || !validateTel() || !validateEmail() || !validateMsg()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Completar el fomulario';
    setTimeout(function() {submitError.style.display = 'none';}, 2000)
    return false;
  }
  alert('El formulario fue enviado')
}


