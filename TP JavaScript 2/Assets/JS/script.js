let annee = document.querySelector('.annee');
let now = new Date();
annee.textContent = now.toLocaleString('fr-FR', {
    year : "numeric",
});

let petite_image = document.getElementsByClassName('petiteImage')
let grande_image = document.querySelector('.grandeImage')

petite_image[0].onmouseover = function(){
    grande_image.src = petite_image[0].src
}
petite_image[1].onmouseover = function(){
    grande_image.src = petite_image[1].src
}
petite_image[2].onmouseover = function(){
    grande_image.src = petite_image[2].src
}
petite_image[3].onmouseover = function(){
    grande_image.src = petite_image[3].src
}


const compteur = document.querySelector('#compteur');
const moins = document.querySelector('#moins');
const plus = document.querySelector('#plus');

deb = 0;
plus.addEventListener('click', () =>{
    deb++;
    deb = (deb < 10) ? "0" + deb: deb;
    compteur.innerHTML = deb;
});
moins.addEventListener('click', () =>{
    if(deb > 0){
    deb--;
    deb = (deb < 10) ? "0" + deb: deb;
    compteur.innerHTML = deb;}
});

setTimeout(()=>{
    var mail = prompt("Quel est votre adresse mail?");
}, 10000);

var navBurger = document.getElementById("navBurger");
var openBurger = document.getElementById("openBurger");
var closeBurger = document.getElementById("closeBurger");

openBurger.onclick = openNav;
closeBurger.onclick = closeNav;

function openNav(){
    navBurger.classList.add("active");
}
function closeNav(){
    navBurger.classList.remove("active");
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
