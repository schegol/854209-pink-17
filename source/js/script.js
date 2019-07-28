var mapInteractive = document.querySelector("#map");
if (mapInteractive) {
  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [59.936351, 30.321280],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),

          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemarkWithContent = new ymaps.Placemark([59.936351, 30.321280], {
              hintContent: 'ул. Большая Конюшенная, 19/8',
              balloonContent: 'HTML Academy, second level',
          }, {
              iconLayout: 'default#imageWithContent',
              iconImageHref: 'img/icon-map-marker.svg',
              iconImageSize: [36, 36],
              iconImageOffset: [-15, -15],
              iconContentOffset: [0, 0],
              iconContentLayout: MyIconContentLayout
          });

      myMap.geoObjects.add(myPlacemarkWithContent);
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('routeEditor');
  });
}
