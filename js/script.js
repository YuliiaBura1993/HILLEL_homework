Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      dots: true,
      // nav: false,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:4,
              nav:true,
              // loop:false
          }
      }
    })
    $("#js-hamburger").click(function () {
      $("#js-top-line").toggleClass("active");
      $("#js-center-line").toggleClass("active");
      $("#js-bottom-line").toggleClass("active");
      $("#js-nav").toggleClass("show");
    });
  });