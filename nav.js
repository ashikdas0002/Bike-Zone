const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});