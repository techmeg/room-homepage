//open and close hamburger menu

const toggleMenuBtn = document.querySelector('.toggle-menu-btn');
const navLinks = document.querySelector('.nav_links');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const logo = document.querySelector('.logo');

toggleMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(navLinks.classList.contains('showMenu')) {
        navLinks.classList.remove('showMenu');
        toggleMenuBtn.setAttribute('aria-expanded', false);
        logo.style.display = "block";
        closeMenu.classList.remove('isActive');
        hamburger.style.display = 'block';
    } else {
        navLinks.classList.add('showMenu');
        toggleMenuBtn.setAttribute('aria-expanded', true);
        logo.style.display = 'none';
        hamburger.style.display = "none";
        closeMenu.classList.add('isActive');
    }
// close mobile menu when link is clicked
const navItems = document.querySelectorAll('.nav_item');

navItems.forEach(
    function(navItem) {
        navItem.addEventListener('click', toggleMenu);
    }
);

}