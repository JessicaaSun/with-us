var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
          
        }
    },
  });
 