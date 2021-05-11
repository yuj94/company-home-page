const slides = document.querySelectorAll('.banner-box');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

// BANNER CAROUSEL
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// ARROW BUTTONS
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// AUTOSLIDE
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const navigation = document.querySelector(".navigation ul");
const navigationItems = document.querySelectorAll(".navigation ul li a");

// MENU BUTTON EVENTS

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        closeBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});