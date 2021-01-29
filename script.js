// Hero Script
const hero = document.querySelector('.jumbotron');

function heroScroll() {
    const currentScroll = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (currentScroll >= heroHeight / 1.2) {
        hero.classList.add('jumbotron-fade-bottom');
    } else {
        hero.classList.remove('jumbotron-fade-bottom');
    }
}

window.addEventListener('wheel', heroScroll);

// Scrolling Gallery
const galleryRows = document.querySelectorAll(`[class*="gallery-row-"]`);
let scrollRow = 0;

function galleryScroll() {
    requestAnimationFrame(galleryScroll);
    scrollRow = window.pageYOffset;
    galleryRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${scrollRow / 13}, 0, 0, 1)`;
        } else {
            row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${scrollRow / 8}, 0, 0, 1)`;
        }
    });
}
requestAnimationFrame(galleryScroll);
window.addEventListener('wheel', galleryScroll);

// CAROUSEL GALLERY

const carouselBtns = document.querySelectorAll(`[class*='arr-']`);
const carouselImages = Array.from(document.querySelectorAll('.carousel-image img'));
let currentSlide = 0;

function activateSlider(e) {
    if (e.target.classList.contains('arr-next')) {
        arrNextBtn();
    } else {
        arrPrevBtn();
    }
}

function foundImage() {
    const imageMatch = carouselImages.find(function findMatchingImage(img, index) {
        if (index == currentSlide) {
            return img;
        }
    });
    return imageMatch;
}

function addRemoveHideClass() {
    carouselImages.filter(function (img) {
        if (img == foundImage()) {
            img.classList.remove('hide');
        } else {
            img.classList.add('hide');
        }
    });
}

function arrNextBtn() {
    if (currentSlide == carouselImages.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    addRemoveHideClass();
}

function arrPrevBtn() {
    if (currentSlide == 0) {
        currentSlide = carouselImages.length - 1;
    } else {
        currentSlide--;
    }
    addRemoveHideClass();
}
carouselBtns.forEach(function (btn) {
    btn.addEventListener('click', activateSlider);
});
