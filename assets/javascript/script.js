var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    speed: 1000,
    
    navigation: {
      nextEl: ".custombtn2",
      prevEl: ".custombtn1",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
      },
      1200: {
        slidesPerView: 4,
      },}
  });

  function navbarshow(){
    const x =  document.querySelector(".navbarlink");
    x.classList.toggle("top-0");
    const y =  document.querySelector(".overlay1");
    y.classList.toggle("hidean");
}
