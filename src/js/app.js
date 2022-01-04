const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const page = document.documentElement;
    
    burger.addEventListener('click',() => {
        // Toggle NaV
        nav.classList.toggle('nav-active');
        page.classList.toggle('noscroll');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 ÷ 1.5}s';
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');    
    });
}

navSlide();