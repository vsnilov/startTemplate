import Tabby from 'tabbyjs';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-tabs]')) {
    new Tabby('[data-tabs]');
  }
});
