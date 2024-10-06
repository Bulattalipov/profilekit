
var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();







$(function () {

  $('.top-slider__contents').slick({
    dots: true,
    asNavFor: '.top-slider__images',
    autoplay: true,
    autoplaySpeed: 4000,
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



  $('.reviews__wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.portfolio__contents',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26.4878C20.4036 26.4878 26 20.8914 26 13.9878C26 7.08423 20.4036 1.48779 13.5 1.48779C6.59644 1.48779 1 7.08423 1 13.9878C1 20.8914 6.59644 26.4878 13.5 26.4878Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8.98779L8.5 13.9878L13.5 18.9878" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 13.9878H8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.999999C6.59644 0.999998 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 0.999999Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 18.5L18.5 13.5L13.5 8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 13.5L18.5 13.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });




  // $('.portfolio__items').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: false,
  //   focusOnSelect: true,
  //   asNavFor: '.portfolio__contents',
  //   arrows: true,
  //   prevArrow: '<button type="button" class="slick-prev"><svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26.4878C20.4036 26.4878 26 20.8914 26 13.9878C26 7.08423 20.4036 1.48779 13.5 1.48779C6.59644 1.48779 1 7.08423 1 13.9878C1 20.8914 6.59644 26.4878 13.5 26.4878Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8.98779L8.5 13.9878L13.5 18.9878" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 13.9878H8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  //   nextArrow: '<button type="button" class="slick-next"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.999999C6.59644 0.999998 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 0.999999Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 18.5L18.5 13.5L13.5 8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 13.5L18.5 13.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  //   responsive: [{
  //       breakpoint: 1370,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 1180,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 760,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });
  $('.portfolio__contents').slick({
    dots: false,
    fade: true,
    arrows: true,
    // asNavFor: '.portfolio__items',
    prevArrow: '<button type="button" class="slick-prev"><svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26.4878C20.4036 26.4878 26 20.8914 26 13.9878C26 7.08423 20.4036 1.48779 13.5 1.48779C6.59644 1.48779 1 7.08423 1 13.9878C1 20.8914 6.59644 26.4878 13.5 26.4878Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8.98779L8.5 13.9878L13.5 18.9878" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 13.9878H8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.999999C6.59644 0.999998 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 0.999999Z" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 18.5L18.5 13.5L13.5 8.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 13.5L18.5 13.5" stroke="#DB251A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 900,
      settings: {
        arrows: false,
      }
    }]
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

  $('.certificates__btn').on('click', function () {
    $('.certificates__items').addClass('certificates__items--active');
  });

  $('.vacancies-item__details').on('click', function () {
    $($(this)).toggleClass('vacancies-item__details--active');
    $($(this)).next().toggleClass('vacancies-item__box--active');
  });

  $('.entrance__link, .header__contain-boxEntrance, .header__contain-boxReg, .cabinet-basket__btn, .registration__box-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });


  $('.registration__tab').on('click', function (e) {
    e.preventDefault();
    $('.registration__tab').removeClass('registration__tab--active');
    $(this).addClass('registration__tab--active');

    $('.registration__form').removeClass('registration__form--active');
    $($(this).attr('href')).addClass('registration__form--active');
  });

    $('.cabinet-filter__item-title').on('click', function () {
    $(this).parent().toggleClass('cabinet-filter__item--active');
  });

  $('.delivery__get-label').on('click', function () {
    $('.delivery__get-label').removeClass('delivery__get-label--active');
    $(this).addClass('delivery__get-label--active');
  });

  $('.menu__list-serviceText').on('click', function () {
    $('.menu__list-service').toggleClass("active");
  })





  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);




  $('#timepicker').timepicker({
    timeFormat: 'HH:mm ',
    interval: 10,
    minTime: '8',
    maxTime: '19:00',
    defaultTime: '11',
    startTime: '8:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });

});


// let validateForms = function(selector, rules, successModal, yaGoal){
//   new window.JustValidate(selector, {
//     rules: rules,
//     submitHandler: function(form){

//     }
//   })
// }

// validateForms('.form', {email: {required: true, email: true}, tel: {required: true}}, '.thanks-popup', 'send goal');





let arroyReviews = document.querySelectorAll('.reviews__item-text');
let itemShow = document.querySelectorAll('.reviews__item-show');

for(let i = 0; i < arroyReviews.length; i++){
  if(arroyReviews[i].clientHeight > 300){
    arroyReviews[i] = arroyReviews[i].classList.add('reviews__item-text--hidden');
    itemShow[i] = itemShow[i].classList.add('active');
    itemShow[i].addEventListener('click', function () {
      this.previousElementSibling.classList.toggle("reviews__item-text--active");
    })
  }
}






/------------Переключение кнопок в корзине----------------/


let bntDelivery = document.querySelectorAll(".basket__form-labelInput");
let arroyInput =document.querySelectorAll(".delivery-btn");

for(let item of bntDelivery){
  item.addEventListener('click', function(){
    if(this.getAttribute('data-btn') == 1){
      for(let elem of arroyInput){
        elem.style.display = 'none';
      }
    } else{
      for(let elem of arroyInput){
        elem.style.display = 'block';
      }
    }
  });
}




setInterval(inputEnter(), 500);


function inputEnter(){

  let cabinetItem = document.querySelectorAll(".cabinet-content__item");

    for(let elem of cabinetItem){
      let input = elem.querySelector('.input-text');
      input.addEventListener('keydown', function(e){
        if(e.code == "Enter"){
          elem.querySelector('.cabinet-content__btn').click();
        }
    });
  }
}
/-------------------------------/












