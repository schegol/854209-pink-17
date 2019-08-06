//map://

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

//mobile menu://

var nav = document.querySelector(".main-navigation");
var toggle = document.querySelector(".main-navigation__toggle");
var toggleImage = document.querySelector(".main-navigation__toggle-image");
var cross = document.querySelector(".main-navigation__toggle-image--cross");
var burger = document.querySelector(".main-navigation__toggle-image--burger");

if (nav.classList.contains("main-navigation--no-js")) {
  nav.classList.remove("main-navigation--no-js");
  nav.classList.add("main-navigation--closed");
  toggle.classList.add("main-navigation__toggle--closed");
  toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    nav.classList.toggle("main-navigation--closed");
    toggle.classList.toggle("main-navigation__toggle--closed");
  });
};

//pricing slider://

var table = document.querySelector(".pricing-table");
var tableRadio1 = document.getElementById("first-column");
var tableRadio2 = document.getElementById("second-column");
var tableRadio3 = document.getElementById("third-column");

if (table) {
  tableRadio1.addEventListener("click", function (evt) {
    table.classList.add("pricing-table--first-column");
    table.classList.remove("pricing-table--third-column");
  });
  tableRadio2.addEventListener("click", function (evt) {
    table.classList.remove("pricing-table--first-column");
    table.classList.remove("pricing-table--third-column");
  });
  tableRadio3.addEventListener("click", function (evt) {
    table.classList.remove("pricing-table--first-column");
    table.classList.add("pricing-table--third-column");
  });
};

//form popups://

var form = document.querySelector(".contest-form");

if (form) {
  var formSubmit = document.querySelector(".contest-form__submit");
  var formName = document.querySelector("#name");
  var formSurname = document.querySelector("#surname");
  var formEmail = document.querySelector("#email");
  var alertError = document.querySelector(".popup-alert--error");
  var alertErrorClose = document.querySelector(".popup-alert__button--error");
  var alertSuccess = document.querySelector(".popup-alert--success");
  var alertSuccessClose = document.querySelector(".popup-alert__button--success");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!form.checkValidity()) {
      alertError.classList.add("popup-alert--show");
    } else {
      alertSuccess.classList.add("popup-alert--show");
    }
  });

  alertErrorClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    alertError.classList.remove("popup-alert--show");
  });

  alertSuccessClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    alertSuccess.classList.remove("popup-alert--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 27) {
      evt.preventDefault();
      if (alertError.classList.contains("popup-alert--show") || alertSuccess.classList.contains("popup-alert--show")) {
        alertError.classList.remove("popup-alert--show");
        alertSuccess.classList.remove("popup-alert--show");
      }
    }
  });
}
