(function () {
    function openBurgerMenu(item) {
        item.classList.toggle('header__burger-button--active');
        burgerMenu.classList.toggle('nav--burger-menu-active')
    }

    const burgerMenu = document.querySelector('.nav');

    window.openBurgerMenu = openBurgerMenu;
})();

