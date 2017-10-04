$(document).ready(function() {

  // Плавный скролл
  $("html").easeScroll();

  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  // Image gallery
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Телефон маска
  if ( $('.phone-mask').length ) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMaskOnHover: false
    });
  }

  // Датапикер
  $('.datepicker').flatpickr({
    dateFormat: "d.m.Y",
    altInput: true
  });

  // Табы
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    let index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content--active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content--active');
    $('.slick-slider').slick('setPosition');
  });

  // Банки
  $('.bank').on('click', function () {
    $(this).toggleClass('bank--active');
    $(this).find('.bank__bottom').slideToggle();
  });

  // Слайдеры
  $('.hero-slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  $('.index-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.offers-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.news-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Селект
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth : true,
    width: '100%'
  });

  // Формат денег
  let moneyFormat = wNumb({
    thousand: ' '
  });

  // Бегунок nouislider первоначальный взнос
  // const initialPay = document.getElementById('initial-pay');
  // noUiSlider.create(initialPay, {
  //   range: {
  //     min: 0,
  //     max: 1.7
  //   },
  //   connect: [true, false],
  //   start: 1,
  //   step: 0.1,
  //   pips: {
  //     mode: 'values',
  //     values: [0, 0.4, 0.9, 1.3, 1.7, 2],
  //     density: 4
  //   }
  // });

  // initialPay.noUiSlider.on('update', function ( values, handle ) {
  //   $('#initial-pay-input').val(values[handle] * 1000000);
  //   let result = parseInt($('#credit-term-input').val()) * parseInt($('#initial-pay-input').val());
  //   let resultFormat = moneyFormat.to(result);
  //   $('.calc__result span').text(resultFormat);
  // });

  // // Бегунок nouislider срок кредита
  // const creditTerm = document.getElementById('credit-term');
  // noUiSlider.create(creditTerm, {
  //   format: wNumb({
  //     decimals: 0
  //   }),
  //   range: {
  //     min: 1,
  //     max: 30
  //   },
  //   connect: [true, false],
  //   start: 8,
  //   step: 1,
  //   pips: {
  //     mode: 'values',
  //     values: [1, 8, 16, 23, 30],
  //     density: 4
  //   }
  // });

  // creditTerm.noUiSlider.on('update', function ( values, handle ) {
  //   $('#credit-term-input').val(values[handle]);
  //   let result = parseInt($('#credit-term-input').val()) * parseInt($('#initial-pay-input').val());
  //   let resultFormat = moneyFormat.to(result);
  //   $('.calc__result span').text(resultFormat);
  // });

  $('.like').on('click', function () {
    $(this).toggleClass('like--active');
  });

  $('.why .icon').on('mouseenter', function () {
    var index = $(this).index();
    console.log('sdghsfdsdghsfd')
    $('.why .image').removeClass('image--active');
    $('.why .image').eq(index).addClass('image--active');
  })

});


// Карта яндекс
ymaps.ready(function () {
  let data = {
    "type": "FeatureCollection",
    "features": [
      {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [45.067600, 38.949726]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [45.068894, 38.949804]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [45.069472, 38.947401]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.068970, 38.951210]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [45.066210, 38.951145]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [45.068963, 38.944332]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [45.065351, 38.947165]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      {"type": "Feature", "id": 7, "geometry": {"type": "Point", "coordinates": [45.068256, 38.953506]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}}
    ]
  }

  var myMap;

  myMap = new ymaps.Map('map', {
    center: [45.067600, 38.949726],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  let objectManager = new ymaps.ObjectManager({
    clusterize: true,
    gridSize: 32,
    clusterDisableClickZoom: true
  });

  objectManager.objects.options.set('preset', 'islands#redDotIcon');
  objectManager.clusters.options.set('preset', 'islands#redClusterIcons');

  myMap.geoObjects.add(objectManager);

  objectManager.add(data, {
    iconLayout: 'default#image',
    iconImageHref: 'http://gretnagreencreations.co.uk/img/map.png'
  });
  
  // var myPlacemark = new ymaps.Placemark([45.067790, 38.949896], {}, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'http://gretnagreencreations.co.uk/img/map.png',
  //   iconImageSize: [30, 42]
  // })

  // myMap.geoObjects.add(myPlacemark)

  function setCenter (center) {
    myMap.setCenter(center);
  }

  $('.map-center-change .tabs__link').on('click', function () {
    let index = $(this).index();
    let coordinates = data.features[index].geometry.coordinates;
    setCenter(coordinates);
  })
});