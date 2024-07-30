const nav = document.querySelector(".nav-container");

if (nav) {
  const toggle = nav.querySelector(".nav-toggle");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-active")) {
        nav.classList.remove("is-active");
      }
      else {
        nav.classList.add("is-active");
      }
    });
    
    nav.addEventListener("blur", () => {
      nav.classList.remove("is-active");
    });
  }
}

$(document).ready(function() {

    var owl = $('.reviewContainer');
    owl.owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        navClass: ['disabled'],
        dotsClass: ['disabled'],
        autoplayHoverPause: true,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3, 

            },
            1300: {
                items: 3, 

            }
        }
    });
    var owl = $('.holy-concepts');
    owl.owlCarousel({
        loop: true,
        nav: true,
        center: true,
        items: 3,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        navClass: ['disabled'],
        dotsClass: ['disabled'],
        autoplayHoverPause: true,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
                nav: true,

            },
            1300: {
                items: 3,
                nav: true,

            }
        }
    });
});