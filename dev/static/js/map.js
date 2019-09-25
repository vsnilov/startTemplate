function loadScript(src, cb) {
    var script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.onerror = function () {
        cb(new Error("Failed to load" + src));
    };
    script.onload = function () {
        cb();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}

window.addEventListener("load",function(event) {
    window.addEventListener('scroll', function() {
        if (typeof ymaps === 'undefined') {
            loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {

                ymaps.ready(function () {
                    var mapCenter = [59.995908, 30.295153];
                    var mapZoom = 16;
                    var mapId = 'index-map';
                    var mapIcon = '/local/frontend/build/static/img/svg-img/map_place.svg';
                    var mapAdress = 'ул. Генерала Хрулева, д. 7';

                    var indexMap = new ymaps.Map(mapId, {
                        center: mapCenter,
                        zoom: mapZoom,
                        controls: []
                    });

                    var myPlacemark = new ymaps.Placemark(mapCenter, {
                        hintContent: mapAdress,
                        balloonContent: mapAdress
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: mapIcon,
                        iconImageSize: [38, 55],
                        iconImageOffset: [-19, -55]
                    });

                    indexMap.geoObjects.add(myPlacemark);
                    indexMap.behaviors.disable('scrollZoom');
                });

            });
        }
    });
},false);