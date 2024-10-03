const d = document;
const $header = d.querySelector("header");
const $menuIcon = d.querySelector(".menu-btn");
const $mobileNav = d.querySelector(".mobile-nav");
const $overlay = d.querySelector(".overlay");
const $closeIcon = d.querySelector(".close-btn");
const $desawBtn = d.querySelector(".desaw-btn");
const $wordpressBtn = d.querySelector(".wordpress-btn");
const $webDevCards = d.querySelector(".web-development-cards");
const $wordpressCards = d.querySelector(".wordpress-cards");
const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
const otherMediaQuery = window.matchMedia("(max-width: 1023px)");
const $submitBtn = d.querySelector(".submit")

desktopMediaQuery.addEventListener("change", (e) => {
    console.log("hola");
    console.log(e.matches);
    if(e.matches) {
        $overlay.classList.add("hide");
    }
});

otherMediaQuery.addEventListener("change", (e) => {
    if(e.matches) {
    if($header.classList.contains("menu")) {
        $overlay.classList.remove("hide");
    }        
    }
})

d.addEventListener("DOMContentLoaded", (e) => {
    if(window.scrollY >= 100) {
        $header.classList.add("active"); 
    }
})

window.addEventListener("scroll", (e) => {
    console.log("hola");
    if(window.scrollY >= 100) {
        $header.classList.add("active");
    } else {
        $header.classList.remove("active");
    }
});

$menuIcon.addEventListener("click", (e) => {
    $mobileNav.classList.remove("hide");
    $header.classList.add("menu");
    $overlay.classList.remove("hide");
});

$closeIcon.addEventListener("click", (e) => {
    $mobileNav.classList.add("hide");
    $overlay.classList.add("hide");
    $header.classList.remove("menu");
});

$desawBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $webDevCards.classList.remove("hide");
    $wordpressCards.classList.add("hide");
});

$wordpressBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $webDevCards.classList.add("hide");
    $wordpressCards.classList.remove("hide");
});

$submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})