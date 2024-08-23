function openDropdownMenu(dropdownMenu, addClass) {
    dropdownMenu.classList.add(addClass);
    setTimeout(() => {
        dropdownMenu.style.opacity = 1;
    }, 1);
}

let closeTimeout;

function closeDropdownMenu(dropdownMenu, removeClass) {
    dropdownMenu.style.opacity = 0;
    closeTimeout = setTimeout(() => {
        dropdownMenu.classList.remove(removeClass);
        dropdownMenu.style = '';
    }, 333)
}

document.addEventListener('DOMContentLoaded', () => {
    function setupDropdown(menuButton, dropdownMenu, activeClass) {
        menuButton.addEventListener('mouseenter', () => {
            if (closeTimeout) clearTimeout(closeTimeout);
            openDropdownMenu(dropdownMenu, activeClass);
        });

        menuButton.addEventListener('mouseleave', () => {
            closeDropdownMenu(dropdownMenu, activeClass);
        });
    }

    const navMenuButton = document.querySelector('.subscriptions');
    const navDropdownMenu = navMenuButton.querySelector('.subscriptions__menu');
    setupDropdown(navMenuButton, navDropdownMenu, 'subscriptions__menu--active');

    const languageMenuButton = document.querySelector('.language');
    const languageDropdownMenu = languageMenuButton.querySelector('.language__list');
    setupDropdown(languageMenuButton, languageDropdownMenu, 'language__list--active');
});

