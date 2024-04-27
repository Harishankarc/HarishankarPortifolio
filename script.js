function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:1500,
    delay:0
});


ScrollReveal().reveal('.title, .section__text__p1, .section__text__p2', { origin: 'top' });
ScrollReveal().reveal('.profilePic,.c1,.experience-sub-title', { origin: 'left' });
ScrollReveal().reveal('.profilePic,.c2', { origin: 'right' });
ScrollReveal().reveal('.items,.text-container-text', { origin: 'bottom' });

