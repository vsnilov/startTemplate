/* eslint-disable no-use-before-define */
import Swiper, { Navigation, Pagination, Thumbs, Autoplay, Controller, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs, Autoplay, Controller, EffectFade]);

export default () => {
  const sliders = Slider();
  const slidersThumbs = sliders.filter(slider =>
    [...slider.el.classList].includes('js-swiper-thumbs-nav'),
  );

  if (!slidersThumbs.length) {
    return;
  }

  const slidersThumbsNavIndex = sliders.findIndex(slider =>
    [...slider.el.classList].includes('js-swiper-thumbs-nav'),
  );

  const slidersThumbsDetailIndex = sliders.findIndex(slider =>
    [...slider.el.classList].includes('js-swiper-thumbs-detail'),
  );

  if (slidersThumbsNavIndex !== -1 && slidersThumbsDetailIndex !== -1) {
    sliders[slidersThumbsNavIndex].controller.control = sliders[slidersThumbsDetailIndex];
    sliders[slidersThumbsDetailIndex].controller.control = sliders[slidersThumbsNavIndex];
  }
};

function progressBar($wrap, autoplayDelay) {
  const $elem = $wrap.querySelector('.js-swiper-progressbar');
  let height = 1;
  const autoplayTime = autoplayDelay / 100;
  const id = setInterval(frame, autoplayTime);

  function frame() {
    if (height >= 100) {
      clearInterval(id);
    } else {
      height += 1;
      $elem.style.height = `${height}%`;
    }
  }

  return id;
}

function Slider(className = '.swiper-container') {
  const sliders = [];
  const $wrap = document.querySelectorAll(className);

  if (!$wrap.length) {
    return [];
  }

  $wrap.forEach(slider => {
    const settingsCustom = slider.dataset.settings ? JSON.parse(slider.dataset.settings) : null;

    const settingsDefault = {
      loop: true,
      loopedSlides: 4,
      slidesPerView: 'auto',
      speed: 500,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true,
        type: 'bullets',
      },
    };

    const settings = Object.assign(settingsDefault, settingsCustom);
    const sliderSwiper = new Swiper(slider, settings);
    sliders.push(sliderSwiper);

    const $counter = slider.querySelector('.swiper-counter');
    let autoplayDelay = 3000;
    if (slider.dataset.settings) {
      const dataSetting = JSON.parse(slider.dataset.settings);
      autoplayDelay = dataSetting.autoplay?.delay;
    }

    if ($counter) {
      let idInterval = progressBar(slider, autoplayDelay);
      sliderSwiper.on('slideChangeTransitionEnd', swiper => {
        clearInterval(idInterval);
        idInterval = progressBar(slider, autoplayDelay);
        $counter.textContent =
          swiper.realIndex + 1 >= 10 ? swiper.realIndex + 1 : `0${swiper.realIndex + 1}`;
      });
    }
  });

  return sliders;
}
