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
  const initialPay = document.getElementById('initial-pay');
  noUiSlider.create(initialPay, {
    range: {
      min: 0,
      max: 1.7
    },
    connect: [true, false],
    start: 1,
    step: 0.1,
    pips: {
      mode: 'values',
      values: [0, 0.4, 0.9, 1.3, 1.7, 2],
      density: 4
    }
  });

  initialPay.noUiSlider.on('update', function ( values, handle ) {
    $('#initial-pay-input').val(values[handle] * 1000000);
    let result = parseInt($('#credit-term-input').val()) * parseInt($('#initial-pay-input').val());
    let resultFormat = moneyFormat.to(result);
    $('.calc__result span').text(resultFormat);
  });

  // Бегунок nouislider срок кредита
  const creditTerm = document.getElementById('credit-term');
  noUiSlider.create(creditTerm, {
    format: wNumb({
      decimals: 0
    }),
    range: {
      min: 1,
      max: 30
    },
    connect: [true, false],
    start: 8,
    step: 1,
    pips: {
      mode: 'values',
      values: [1, 8, 16, 23, 30],
      density: 4
    }
  });

  creditTerm.noUiSlider.on('update', function ( values, handle ) {
    $('#credit-term-input').val(values[handle]);
    let result = parseInt($('#credit-term-input').val()) * parseInt($('#initial-pay-input').val());
    let resultFormat = moneyFormat.to(result);
    $('.calc__result span').text(resultFormat);
  });

  $('.like').on('click', function () {
    $(this).toggleClass('like--active');
  });

});