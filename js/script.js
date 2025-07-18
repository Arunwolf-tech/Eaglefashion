//header sticky

window.addEventListener("scroll",function(){
    document.querySelector("header"). classList.toggle("sticky",window.scrollY > 0);
});

//navbar open

const menu = document.querySelector('#menu')
const navbar = document.querySelector('.navbar')

window.onload = () => {
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle('open');
  
};
};


//scroll file

const sr=ScrollReveal ({
    distance: '30px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.middle-text,.cta-content,.Contact',{delay:200, origin:'bottom'})