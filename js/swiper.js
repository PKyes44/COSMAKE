var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    }
  });