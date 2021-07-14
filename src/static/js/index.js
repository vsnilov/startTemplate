// import "./vue/index"
import 'lazysizes';
import '@fancyapps/ui';
import svg4everybody from 'svg4everybody';
import OverlayElement from './class/OverlayElement';
import Slider from './components/slider';
import MaskPhone from './components/phone';
import './components/tabs';

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody();
  Slider();
  MaskPhone();
  new OverlayElement('menu');
});

document.addEventListener('lazybeforeunveil', function(e) {
  const bg = e.target.getAttribute('data-bg');
  if (bg) {
    e.target.style.backgroundImage = `url(${bg})`;
  }
});
