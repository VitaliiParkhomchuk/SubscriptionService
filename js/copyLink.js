(function () {
  'use strict';

  function setInviteLink() {
    navigator.clipboard.writeText('http://127.0.0.1:5500/index.html')
      .catch((err) => {
        console.error('Не вдалося скопіювати посилання: ', err);
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const linkButton = document.querySelector('.row__link');

    if (linkButton) {
      linkButton.addEventListener('click', setInviteLink);
    } else {
      console.error('Елемент з класом .row__link не знайдено.');
    }
  });
})();
