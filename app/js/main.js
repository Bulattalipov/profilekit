$(function () {

  $('.top-slider__contents').slick({
    dots: true,
    asNavFor: '.top-slider__images',
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 31L1.5 16L16.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0.999999L16.5 16L1.5 31" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }]
  });
  $('.top-slider__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.top-slider__contents'
  });




  $('.portfolio__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.portfolio__contents',
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26.4878C20.4036 26.4878 26 20.8914 26 13.9878C26 7.08423 20.4036 1.48779 13.5 1.48779C6.59644 1.48779 1 7.08423 1 13.9878C1 20.8914 6.59644 26.4878 13.5 26.4878Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8.98779L8.5 13.9878L13.5 18.9878" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 13.9878H8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.999999C6.59644 0.999998 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 0.999999Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 18.5L18.5 13.5L13.5 8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 13.5L18.5 13.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.portfolio__contents').slick({
    dots: false,
    arrows: false,
    asNavFor: '.portfolio__items'
  });


  $('.team__wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26.4878C20.4036 26.4878 26 20.8914 26 13.9878C26 7.08423 20.4036 1.48779 13.5 1.48779C6.59644 1.48779 1 7.08423 1 13.9878C1 20.8914 6.59644 26.4878 13.5 26.4878Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8.98779L8.5 13.9878L13.5 18.9878" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 13.9878H8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.999999C6.59644 0.999998 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 0.999999Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 18.5L18.5 13.5L13.5 8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 13.5L18.5 13.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.header').toggleClass('header--active');
  });

});