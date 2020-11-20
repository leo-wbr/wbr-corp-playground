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
