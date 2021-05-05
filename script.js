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

/**
 * Scrolling Gallery
 */
const getGallery = document.querySelector('section.gallery');
const galleryRows = Array.from(document.querySelectorAll(`[class*="gallery-row-"]`));
const getBody = document.querySelector('body');

let scrollRow = 0;

const galleryScroll = function (e) {
    scrollRow = window.pageYOffset;
    const slideInAt = window.scrollY + window.innerHeight - getGallery.offsetHeight / 2;
    const galleryBottom = getGallery.offsetTop + getGallery.offsetHeight;
    const isHalfShown = slideInAt > getGallery.offsetTop;
    const isNotScrolledPast = window.scrollY < galleryBottom;

    if (isHalfShown && isNotScrolledPast) {
        galleryRows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${scrollRow / 10}, 0, 0, 1)`;
            } else {
                row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${scrollRow / 10}, 0, 0, 1)`;
            }
        });
    }
};

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// window.addEventListener('wheel', debounce(galleryScroll));
window.addEventListener('scroll', debounce(galleryScroll));

// CAROUSEL GALLERY
const carouselBtns = document.querySelectorAll(`[class*='arr-']`);
const carouselImages = Array.from(document.querySelectorAll('.carousel-images img'));
const carouselContent = Array.from(document.querySelectorAll('.carousel-content .carousel-content-item'));
const combinedArrays = [carouselImages, carouselContent];

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
