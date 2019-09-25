"use strict";
window.onload = function () {
    var images = document.querySelectorAll('img');
    var options = {
        root: null,
        rootMargin: '300px',
        threshold: 0.1
    };

    var fetchImage = function fetchImage(url) {
        //console.log(url);
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
        });
    };

    var loadImage = function loadImage(image) {
        var src = image.dataset.src;
        image.classList.remove('preload');
        fetchImage(src).then(function () {
          //  console.log(src);
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
};

function loadImg() {
    $('.preload').each(function (key, value) {
        var srcReal = $(this).attr('data-src');
        $(this).animate({opacity: 'hide'}, 0);
        $(this).attr('src', srcReal).removeClass('preload');
        $(this).animate({opacity: 'show'}, 1000);
    });
}