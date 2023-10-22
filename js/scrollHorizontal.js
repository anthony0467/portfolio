   var swiperEl = document.querySelector(".mySwiper3");
    Object.assign(swiperEl, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      mousewheel: true,
      speed: 500,
    });
    swiperEl.initialize()