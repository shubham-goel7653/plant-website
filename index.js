const mobile_nav = document.querySelector(".navbar-btn");
const nav_header = document.querySelector(".nav-bar")
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener('click', ()=> toggleNavbar());




const slides = document.querySelectorAll(".div1")
var counter = 0;
slides.forEach(
    (div1, index) => {
        div1.style.left = `${index * 100}%`
    }
)

const slideImage = () => {
    slides.forEach(
        (div1) => {
            div1.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goPrev = () => {
    if(counter != 0){
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if(counter < slides.length-1){
        counter++;
        slideImage();
    }
}

const btns = document.querySelectorAll(".nav-btn");
const slider = document.querySelectorAll(".slide");
var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slider.forEach((slyde) => {
        slyde.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slider[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

function visible1(){
    let a = document.getElementById('span1');
    a.style.zIndex = "1"
}
function notvisible1(){
    let a = document.getElementById('span1');
    a.style.zIndex = "-1"
}
function visible2(){
    let a = document.getElementById('span2');
    a.style.zIndex = "1"
}
function notvisible2(){
    let a = document.getElementById('span2');
    a.style.zIndex = "-1"
}
