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
const $form = d.querySelector("#contact");
const $nameInput = d.querySelector("input[type='text'");
const $emailInput = d.querySelector("input[type='email'");
const $textarea = d.querySelector("textarea");
const $errorMsgs = d.querySelectorAll(".error");
const $message = d.querySelector(".message");

// ANIMATIONS INTERSECTION OBSERVER
const $hero = d.querySelector(".hero-container");
const $aboutMe = d.querySelector(".aboutme");
const $skills = d.querySelector(".skills-container");
const $skillsImgs = d.querySelectorAll(".skill")
const $cards = d.querySelector(".projects-container");
const $contact = d.querySelector(".contact-container");

let validName = false;
let validEmail = false;
let validMessage = false;

const namePattern = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

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
    if(window.scrollY >= 100) {
        $header.classList.add("active");
    } else {
        $header.classList.remove("active");
    }

    //ANIMATIONS
    let positionAboutMe = $aboutMe.getBoundingClientRect().top;
    let positionSkills = $skills.getBoundingClientRect().top;
    console.log(positionSkills);
    let positionCards = $cards.getBoundingClientRect().top;
    let positionContact = $contact.getBoundingClientRect().top;

    let screenSize = window.innerHeight/4;

    if(positionAboutMe < screenSize) {
        $aboutMe.style.animation = "appear 2s ease-in";
        $aboutMe.style.opacity = "1";
    }

    if(positionSkills < screenSize) {
        $skillsImgs.forEach(img => {
            img.style.animation = "grow 2s ease-in";
            img.style.opacity = "1";
        });
    }

    if(positionCards < screenSize) {
        $cards.style.animation 
        = "growBig 2s ease-in";
        $cards.style.opacity = "1";
    }

    if(positionContact < screenSize) {
        $contact.style.animation = "appear 2s ease-in";
        $contact.style.opacity = "1";
    }
});

    // ANIMATIONS
    function callback(entries) {
    }

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

$nameInput.addEventListener("input", (e) => {
    if(e) {
    if($nameInput.value.length === 0) {
        validName = false;
        $errorMsgs[0].classList.remove("hide");
    } else {
        if(namePattern.test($nameInput.value)) {
            validName = true;
            $errorMsgs[0].classList.add("hide");
        } else {
            validName = false;       
            $errorMsgs[0].classList.remove("hide");
        }
    }        
    }
});

$emailInput.addEventListener("input", (e) => {
    if(e) {
    if($emailInput.value.length === 0) {
        validEmail = false;
        $errorMsgs[1].classList.remove("hide");
    } else {
        if(emailPattern.test($emailInput.value)) {
            validEmail = true;
            $errorMsgs[1].classList.add("hide");
        } else {
            validEmail = false;       
            $errorMsgs[1].classList.remove("hide");
        }
    }        
    }
});

$textarea.addEventListener("input", (e) => {
    if(e) {
    if($textarea.value.length === 0) {
        validMessage = false;
        $errorMsgs[2].classList.remove("hide");
    } else {
        if($textarea.value.length > 20) {
            validMessage = true;
            $errorMsgs[2].classList.add("hide");
        } else {
            validMessage = false;       
            $errorMsgs[2].classList.remove("hide");
        }
    }        
    }
});

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(validName, validEmail, validMessage);

    if(validName === false) {
        $errorMsgs[0].classList.remove("hide");
    };

    if(validEmail === false ) {
        $errorMsgs[1].classList.remove("hide");
    };

    if(validMessage === false) {
        $errorMsgs[2].classList.remove("hide");
    }

    if(validEmail === true && validName === true && validMessage === true) {
        $form.submit();
        $message.classList.remove("hide");
    }
})