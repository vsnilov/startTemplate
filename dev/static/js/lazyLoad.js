"use strict";

window.addEventListener('load', function () {
    var images = document.querySelectorAll('img.js-lazyLoad');
    var options = {
        root: null,
        rootMargin: '500px',
        threshold: 0.1
    };

    var fetchImage = function fetchImage(url) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
        });
    };

    var loadImage = function loadImage(image) {
        var src = image.dataset.src;
        image.classList.remove('js-lazyLoad');
        fetchImage(src).then(function () {
            image.src = src;
        });
    };

    var handleIntersection = function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                loadImage(entry.target);
            }
        });
    };

    var observer = new IntersectionObserver(handleIntersection, options);
    images.forEach(function (img) {
        observer.observe(img);
    });
});

function loadImg() {
    $('.js-lazyLoad').each(function (key, value) {
        var srcReal = $(this).attr('data-src');
        $(this).animate({opacity: 'hide'}, 0);
        $(this).attr('src', srcReal).removeClass('js-lazyLoad');
        $(this).animate({opacity: 'show'}, 1000);
    });
}