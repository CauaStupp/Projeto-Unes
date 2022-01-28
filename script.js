const menu = document.querySelector('.menu-mobile');
const menuFechar = document.querySelector('.nav-fechar');
const nav = document.querySelector('.nav-bg');



menu.addEventListener('click', function() {
    nav.classList.add('active');
});

menuFechar.addEventListener('click', function() {
    nav.classList.remove('active');
});