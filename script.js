const hero = document.querySelector('.jumbotron');

function heroScroll() {
    //TOP
    if(hero.getBoundingClientRect().top <= 1){
      hero.style.transform = `scale(0.2)`;
      hero.style.transform = `translate(-100 %, -100 %)`;
    }
    //BOTTOM
    if(hero.getBoundingClientRect().bottom <= 0){
      hero.style.transform = `scale(0)`;
      hero.style.transform = `translate(0,0)`;
    }

}

hero.addEventListener('wheel', heroScroll)



