const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let isMenuOpen = false;

const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    isMenuOpen = !isMenuOpen;
};

hamburger.addEventListener('click', toggleMenu);

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }