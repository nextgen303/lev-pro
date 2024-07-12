

// Add Event on elements

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};



// Navbar Toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/*=============== Slider ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.2,
    },

    600: {
      slidesPerView: 1.6,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 2.9,
    },
  },
});

let brandCards = new Swiper(".brand__content", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1.8,
    },

    400: {
      slidesPerView: 2.6,
    },

    600: {
      slidesPerView: 3,
    },

    708: {
      slidesPerView: 3.4,
    },

    808: {
      slidesPerView: 3.8,
    },

    968: {
      slidesPerView: 4.3,
    },

    1100: {
      slidesPerView: 4.3,
    },

    1160: {
      slidesPerView: 5,
    },

    1250: {
      slidesPerView: 6,
    },

    1350: {
      slidesPerView: 7,
    },
  },
});

/*=============== Slider ===============*/
let programCards = new Swiper(".programs_card", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.2,
    },

    600: {
      slidesPerView: 1.6,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});

let mediaCards = new Swiper(".media_card", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1.2,
    },

    400: {
      slidesPerView: 1.2,
    },

    600: {
      slidesPerView: 1.6,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});

let knowledgeCards = new Swiper(".knowledge_image_content", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.2,
    },

    600: {
      slidesPerView: 1.6,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});

/*=============== Slider ===============*/
let reviewCards = new Swiper(".review_card", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.3,
    },

    500: {
      slidesPerView: 1.6,
    },

    600: {
      slidesPerView: 1.8,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




/*=============== Slider ===============*/
let programThreeCards = new Swiper(".programs_three_card", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.2,
    },

    600: {
      slidesPerView: 1.6,
    },

    708: {
      slidesPerView: 2.1,
    },

    808: {
      slidesPerView: 2.1,
    },

    968: {
      slidesPerView: 2.4,
    },

    1100: {
      slidesPerView: 2.7,
    },

    1160: {
      slidesPerView: 2.7,
    },

    1250: {
      slidesPerView: 2.9,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});
