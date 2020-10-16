const hero = document.querySelector('.jumbotron');
const fadeItems = document.querySelectorAll('.item-fade');

function heroScroll() {
    const heroPosition = hero.getBoundingClientRect().bottom;
    const screenPosition = window.innerHeight / 4;

    if (heroPosition < screenPosition) {
        hero.classList.add('hero-fade-bottom');
    } else {
        hero.classList.remove('hero-fade-bottom');
    }
}

window.addEventListener('wheel', heroScroll);

//
fadeItems.forEach((item) =>
    item.addEventListener('wheel', (e) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1;

        if (itemPosition < screenPosition) {
            item.classList.add('item-fade-bottom');
        } else {
            item.classList.remove('item-fade-bottom');
        }

        console.log(itemPosition);
    })
);

// filterInputs.forEach((input) =>
//     input.addEventListener('input', () => {
//         transformText(textarea.value);
//     })
// );
