'use strict';

$(document).ready(function () {

  // Плавный скролл
  $("html").easeScroll();

  // SVG magic
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
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
  if ($('.phone-mask').length) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMaskOnHover: false
    });
  }

  // Табы
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    var index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content--active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content--active');
  });

  // Банки
  $('.bank').on('click', function () {
    $(this).toggleClass('bank--active');
    $(this).find('.bank__bottom').slideToggle();
  });

  // Слайдеры
  $('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});