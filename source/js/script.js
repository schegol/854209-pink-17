//map://

var mapInteractive = document.querySelector('#map');
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

var nav = document.querySelector('.main-navigation');
var toggle = document.querySelector('.main-navigation__toggle');
var toggleImage = document.querySelector('.main-navigation__toggle-image');
var cross = document.querySelector('.main-navigation__toggle-image--cross');
var burger = document.querySelector('.main-navigation__toggle-image--burger');

if (nav.classList.contains('main-navigation--no-js')) {
  nav.classList.remove('main-navigation--no-js');
  nav.classList.add('main-navigation--closed');
  toggle.classList.add('main-navigation__toggle--closed');
  toggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    nav.classList.toggle('main-navigation--closed');
    toggle.classList.toggle('main-navigation__toggle--closed');
  });
};

//reviews slider://

var slider = document.querySelector('.reviews__list');

if (slider) {
  var slides = document.querySelectorAll('.reviews__item');
  var leftArrow = document.querySelector('.slider__arrow--left');
  var rightArrow = document.querySelector('.slider__arrow--right');
  var radioButtons = document.getElementsByName('review-toggle');
  var currentSlide = 0;
  var currentRadio = 0;

  var hideAllSlides = function () {
    slides.forEach(function (slide) {
      slide.classList.add('slider__item--hidden');
    });
  };

  radioButtons.forEach(function (radio, i) {
    if (radio.checked) {
      slides[i].classList.remove('slider__item--hidden');
      document.querySelector('input[name=review-toggle]:checked').checked = false;
      radioButtons[i].checked = true;
    }

    radio.addEventListener('change', function () {
      hideAllSlides();
      slides[i].classList.remove('slider__item--hidden');
      document.querySelector('input[name=review-toggle]:checked').checked = false;
      radioButtons[i].checked = true;
    });
  });



  leftArrow.onclick = function() {
    prev();
  };

  rightArrow.onclick = function() {
    next();
  };

  function prev() {
    if (currentSlide == 0 || currentRadio == 0) {
      currentSlide = slides.length - 1;
      currentRadio = radioButtons.length - 1;
    } else {
      currentSlide--;
      currentRadio--;
    };

    hideAllSlides();
    slides[currentSlide].classList.remove('slider__item--hidden');

    document.querySelector('input[name=review-toggle]:checked').checked = false;
    radioButtons[currentRadio].checked = true;
  };

  function next() {
    if (currentSlide == slides.length - 1 || currentRadio == radioButtons.length - 1) {
      currentSlide = 0;
      currentRadio = 0;
    } else {
      currentSlide++;
      currentRadio++;
    };

    hideAllSlides();
    slides[currentSlide].classList.remove('slider__item--hidden');

    document.querySelector('input[name=review-toggle]:checked').checked = false;
    radioButtons[currentRadio].checked = true;
  };
};

//pricing slider://

var table = document.querySelector('.pricing-table');

if (table) {
  var tableRadio1 = document.getElementById('first-column');
  var tableRadio2 = document.getElementById('second-column');
  var tableRadio3 = document.getElementById('third-column');

  tableRadio1.addEventListener('click', function (evt) {
    table.classList.add('pricing-table--first-column');
    table.classList.remove('pricing-table--third-column');
  });
  tableRadio2.addEventListener('click', function (evt) {
    table.classList.remove('pricing-table--first-column');
    table.classList.remove('pricing-table--third-column');
  });
  tableRadio3.addEventListener('click', function (evt) {
    table.classList.remove('pricing-table--first-column');
    table.classList.add('pricing-table--third-column');
  });
};

//form popups://

var form = document.querySelector('.contest-form');

if (form) {
  var formSubmit = document.querySelector('.contest-form__submit');
  var formName = document.querySelector('#name');
  var formSurname = document.querySelector('#surname');
  var formEmail = document.querySelector('#email');
  var alertError = document.querySelector('.popup-alert--error');
  var alertSuccess = document.querySelector('.popup-alert--success');
  var closeButtons = document.querySelectorAll('.popup-alert__button');

  form.setAttribute('novalidate', '0');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    form.checkValidity() ? alertSuccess.classList.add('popup-alert--show') : alertError.classList.add('popup-alert--show');
  });

  [].forEach.call(closeButtons, function (button) {
    button.addEventListener('click', function() {
      alertSuccess.classList.contains('popup-alert--show') && alertSuccess.classList.remove('popup-alert--show');
      alertError.classList.contains('popup-alert--show') && alertError.classList.remove('popup-alert--show');
    })
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      if (alertError.classList.contains('popup-alert--show') || alertSuccess.classList.contains('popup-alert--show')) {
        alertError.classList.remove('popup-alert--show');
        alertSuccess.classList.remove('popup-alert--show');
      }
    }
  });
}
