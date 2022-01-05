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


function carrousel() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                    if (ind == 0) return 3*delta + 2*d;
                                    if (ind == 1) return 2*delta + d;
                                    if (ind == 2) return delta;
                                    return 0;
                                }},
                     {value: 0, duration: function(img, ind) {
                                if (ind == 3) return 0;
                                return d;
                            }}],
        easing: 'linear',
        delay: function(img,ind){
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}

function carrouselAlternate() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
    anim15.add({
        translateX: [{value: 500, duration: d, easing: 'easeInOutCubic'},
                     {value: 500, duration: 0, delay: delta}]
    });
}

function monterLegende() {
    let texte13 = document.querySelector(".texte13");
    texte13.style.display='block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play
}

function descendreLegende() {
	return anime({
        targets: '.texte13',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play
}