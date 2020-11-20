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
function galleryScroll() {
    galleryRows.forEach((row, index) => {
        const scrollOddRow = window.pageYOffset / 13;
        const scrollEvenRow = window.pageYOffset / 8;

        if (index % 2 === 0) {
            row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${scrollOddRow}, 0, 0, 1)`;
        } else {
            row.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${scrollEvenRow}, 0, 0, 1)`;
        }
    });
}
window.addEventListener('wheel', galleryScroll);
