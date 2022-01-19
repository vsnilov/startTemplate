// import "./vue/index"
import 'lazysizes';
import svg4everybody from 'svg4everybody';
import OverlayElement from './class/OverlayElement';
import slider from './components/slider';
import './components/phoneMask';
import './components/tabs';
import './components/fancybox';

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody();
  slider();
  new OverlayElement('menu');
});

document.addEventListener('lazybeforeunveil', function(e) {
  const bg = e.target.getAttribute('data-bg');
  if (bg) {
    e.target.style.backgroundImage = `url(${bg})`;
  }
});
