const hero = document.querySelector('.jumbotron');

function heroScroll() {
    const currentScroll = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (currentScroll >= heroHeight / 1.2) {
        hero.classList.add('hero-fade-bottom');
    } else {
        hero.classList.remove('hero-fade-bottom');
    }
}

window.addEventListener('wheel', heroScroll);
