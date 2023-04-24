const iconMenuMobile = document.querySelector('.menu-mobile-icon');
const menuMobile = document.querySelector('.menu-mobile')
const iconMenuRedes = document.querySelector('.menu-redes-icon')
const menuRedes = document.querySelector('.menu-redes')

iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconMenuRedes.addEventListener('click', toggleMenuRedes);

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
    menuRedes.classList.add('inactive')
}
function toggleMenuRedes() {
    menuRedes.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
}