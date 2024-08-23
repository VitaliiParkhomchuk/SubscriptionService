(function () {
    "use strict";

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
            dropdownMenu.style.opacity = '';
        }, 333)
    }

    function animateOpenButtonOnMobile(arrow) {
        arrow.style.transform = 'rotate(90deg)';
    }

    function animateCloseButtonOnMobile(arrow) {
        arrow.style.transform = 'rotate(0deg)';
    }

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    document.addEventListener('DOMContentLoaded', () => {
        function setupDropdown(menuButton, dropdownMenu, activeClass) {
            if (isMobileDevice()) {
                const buttonArrow = menuButton.querySelector('img');
                menuButton.addEventListener('click', () => {
                    if (!dropdownMenu.classList.contains(activeClass)) {
                        openDropdownMenu(dropdownMenu, activeClass);
                        animateOpenButtonOnMobile(buttonArrow);
                    } else {
                        closeDropdownMenu(dropdownMenu, activeClass);
                        animateCloseButtonOnMobile(buttonArrow);
                    }
                });

                document.addEventListener('click', (event) => {
                    if (!menuButton.contains(event.target) && dropdownMenu.classList.contains(activeClass)) {
                        closeDropdownMenu(dropdownMenu, activeClass);
                        animateCloseButtonOnMobile(buttonArrow);
                    }
                });
            } else {
                menuButton.addEventListener('mouseenter', () => {
                    if (closeTimeout) clearTimeout(closeTimeout);
                    openDropdownMenu(dropdownMenu, activeClass);
                });

                menuButton.addEventListener('mouseleave', () => {
                    closeDropdownMenu(dropdownMenu, activeClass);
                });
            }
        }

        const navMenuButton = document.querySelector('.subscriptions');
        const navDropdownMenu = navMenuButton.querySelector('.subscriptions__menu');
        setupDropdown(navMenuButton, navDropdownMenu, 'subscriptions__menu--active');

        const languageMenuButton = document.querySelector('.language');
        const languageDropdownMenu = languageMenuButton.querySelector('.language__list');
        setupDropdown(languageMenuButton, languageDropdownMenu, 'language__list--active');
    });
})();
