(function () {
  'use strict';

  function setInviteLink(item) {
    navigator.clipboard.writeText('http://127.0.0.1:5500/index.html');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const linkButton = document.querySelector('.row__link');
    linkButton.addEventListener('click', setInviteLink(linkButton));
  });
})();