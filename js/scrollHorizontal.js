  var swiper3El = document.querySelector(".mySwiper3");
    Object.assign(swiper3El, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
       mousewheel: true,
      speed: 500,
    });
    swiper3El.initialize()