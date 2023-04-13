/* Java Script Icon Search */
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

/* Java Script Navbar */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
/* Java Script Navbar Scroll */
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});