"use strict";

document.addEventListener("DOMContentLoaded", function() {
  
    let menuLinks = document.querySelectorAll(".navigation-desktop__el a");
    let burgerLinks = document.querySelectorAll(".menu__el a");
    let slides = document.querySelectorAll(".slider__el");

    menuLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            updateIndicator();
            event.preventDefault();
            slides.forEach(slide => {
                slide.classList.remove("slider__el--show");
            });
            slides[index].classList.add("slider__el--show");
            updateNavigationActiveSlide(); 
            updateIndicator();
        });
    });

    burgerLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            document.body.classList.remove("menu--open");
            updateBurgerButtonImage();
            
            event.preventDefault();
            slides.forEach(slide => {
                slide.classList.remove("slider__el--show");
            });
            slides[index].classList.add("slider__el--show");
            updateNavigationActiveSlide(); 
        });
        
    });

    setupTimeout();
    updateNavigationActiveSlide(); 
});


function updateBurgerButtonImage() {
    let burgerMenuButton = document.querySelector('.menu-toggle img');
    if (!burgerMenuButton) return;

    if (document.body.classList.contains("menu--open")) {
        burgerMenuButton.src = "assets/images/cross.svg";
    } else {
        burgerMenuButton.src = "assets/images/burger.svg";
    }
}

function burgerMenuOpen() {
    document.body.classList.toggle("menu--open");
    updateBurgerButtonImage();

    let footerList = document.querySelector('.footer__list');
    if (footerList) {
        setTimeout(function() {
            footerList.classList.toggle("footer__list--active");
        }, 300); 
    }
}

let burgerMenu = document.querySelector('.menu-toggle');
if (burgerMenu) {
    burgerMenu.addEventListener('click', burgerMenuOpen);
} else {
    console.error("L'élément n'existe pas");
}

let interval;
let timeout;

function clearAuto() {
    if (interval) {
        clearInterval(interval);
    }
    if (timeout) {
        clearTimeout(timeout);
    }
}

function launchAuto() {
    interval = setInterval(() => {
        nextSlide();
    }, 10000);
}

function setupTimeout() {
    timeout = setTimeout(() => {
        launchAuto();
    }, 1000);
}

function prevSlide() {
    let activeSlideEl = document.querySelector(".slider__el--show");
    if (activeSlideEl) {
        let prevSlideEl = activeSlideEl.previousElementSibling;
        if (!prevSlideEl) {
            prevSlideEl = activeSlideEl.parentNode.lastElementChild;
        }
        activeSlideEl.classList.remove("slider__el--show");
        prevSlideEl.classList.add("slider__el--show");
        updateIndicator();
        updateNavigationActiveSlide(); 
    }
}

function nextSlide() {
    let activeSlideEl = document.querySelector(".slider__el--show");
    if (activeSlideEl) {
        let nextSlideEl = activeSlideEl.nextElementSibling;
        if (!nextSlideEl) {
            nextSlideEl = activeSlideEl.parentNode.firstElementChild;
        }
        activeSlideEl.classList.remove("slider__el--show");
        nextSlideEl.classList.add("slider__el--show");
        updateIndicator();
        updateNavigationActiveSlide(); 
    }
}

function updateIndicator() {
    let activeSlideIndex = Array.from(document.querySelectorAll(".slider__el")).findIndex(el => el.classList.contains('slider__el--show'));
    let indicatorItems = document.querySelectorAll(".indicator__el");
    indicatorItems.forEach(function(item, index) {
        if (index === activeSlideIndex) {
            item.classList.add("indicator__el--active");
        } else {
            item.classList.remove("indicator__el--active");
        }
    });
}

function updateNavigationActiveSlide() {
    let slides = document.querySelectorAll(".slider__el");
    let menuLinks = document.querySelectorAll(".navigation-desktop__el");

    slides.forEach((slide, index) => {
        if (slide.classList.contains("slider__el--show")) {
            menuLinks.forEach((link, i) => {
                if (index === i) {
                    link.classList.add("navigation-desktop__el--active");
                } else {
                    link.classList.remove("navigation-desktop__el--active");
                }
            });
        }
    });
}

