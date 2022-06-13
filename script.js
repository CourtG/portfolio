const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navList');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
});