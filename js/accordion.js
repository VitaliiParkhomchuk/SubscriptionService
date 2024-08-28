(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion__button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('accordion__button_active')) {
          button.classList.remove('accordion__button_active');
          button.parentElement.classList.remove('accordion_active');
          button.nextElementSibling.classList.remove('accordion__content_active')
          button.nextElementSibling.style.maxHeight = 0;
        } else {
          buttons.forEach(button => {
            button.classList.remove('accordion__button_active');
            button.parentElement.classList.remove('accordion_active');
            button.nextElementSibling.classList.remove('accordion__content_active');
            button.nextElementSibling.style.maxHeight = 0;
          });
          button.classList.add('accordion__button_active');
          button.parentElement.classList.add('accordion_active');
          button.nextElementSibling.classList.add('accordion__content_active');
          button.nextElementSibling.style.maxHeight = button.nextElementSibling.scrollHeight + 'px';
        }
      });
    });
  });
})();