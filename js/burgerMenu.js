(function () {
  'use strict';

  function openBurgerMenu(item) {
    item.classList.toggle('header__burger-button_active');
    burgerMenu.classList.toggle('nav_burger-menu-active')
  }

  const burgerMenu = document.querySelector('.nav');

  window.openBurgerMenu = openBurgerMenu;
})();

