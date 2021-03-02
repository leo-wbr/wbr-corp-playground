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
const carouselImages = Array.from(document.querySelectorAll('.carousel-images img'));
const carouselContent = Array.from(document.querySelectorAll('.carousel-content .carousel-content-item'));
let currentSlide = 0;

function activateSlider(e) {
    if (e.target.classList.contains('arr-next')) {
        arrNextBtn();
    } else {
        arrPrevBtn();
    }
}

function arrNextBtn() {
    if (currentSlide == carouselImages.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    findHideAndShowContent();
}

function arrPrevBtn() {
    if (currentSlide == 0) {
        currentSlide = carouselImages.length - 1;
    } else {
        currentSlide--;
    }
    findHideAndShowContent();
}

function findHideAndShowContent() {
    const combinedArrays = [carouselImages, carouselContent];
    combinedArrays.forEach(function listEachArray(content) {
        content.forEach(function addRemoveClassByIndex(item, index) {
            if (index == currentSlide) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
}

carouselBtns.forEach(function (btn) {
    btn.addEventListener('click', activateSlider);
});
