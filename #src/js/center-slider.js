new Swiper('.center-slider', { 
    //Стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      //Булеты, навигация, текущее положение
      pagination: {
        el:'.swiper-pagination',
        clickable: true
      }
    });
  