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

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-open-btn");

  const toggleButtonColors = () => {
    navButtons.forEach((button) => {
      if (document.body.classList.contains("bg-black")) {
        button.classList.add("bg-black");
      } else {
        button.classList.remove("bg-black");
      }
    });
  };

  // Simulate background color change
  const toggleBackgroundColor = () => {
    document.body.classList.toggle("bg-black");
    toggleButtonColors();
  };

  // Initial call to set button colors based on initial background color
  toggleButtonColors();
});

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


window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY; // Get the current scroll position
  var parallaxElement = document.querySelector('.parallax_move_down');
  var mainBgElement = document.querySelector('.main_bg');

  if (scrollPosition > 130) { // Adjust the scroll position threshold as needed
    parallaxElement.classList.add('hidden');
    mainBgElement.classList.add('white-background');
  } else {
    parallaxElement.classList.remove('hidden');
    mainBgElement.classList.remove('white-background');
  }
});

/*=============== Slider ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card__container, .card__container_two");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardContainer.classList.add("full-width");
          }, 1000);
          observer.unobserve(cardContainer); 
        }
      });
    },
    { threshold: 0.1 } 
  );

  observer.observe(cardContainer);
});

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(" .card__container_two");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardContainer.classList.add("full-width");
          }, 1000);
          observer.unobserve(cardContainer); 
        }
      });
    },
    { threshold: 0.1 } 
  );

  observer.observe(cardContainer);
});


let swiperCards = new Swiper(".card__content", {
  loop: true,
  autoplay: true,
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
      slidesPerView: 3.5,
    },

    1550: {
      slidesPerView: 4.5,
    },

    1850: {
      slidesPerView: 5,
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
  autoplay: true,

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
    300: {
      slidesPerView: 1,
    },

    400: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 1.3,
    },

    600: {
      slidesPerView: 1.7,
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
let programFourCards = new Swiper(".programs_four_card", {
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
      slidesPerView: 1.4,
    },

    1250: {
      slidesPerView: 2,
    },

    1350: {
      slidesPerView: 2.9,
    },
  },
});

/*=============== Slider ===============*/
let programFiveCards = new Swiper(".programs_five_card", {
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
      slidesPerView: 1.4,
    },

    1250: {
      slidesPerView: 2,
    },

    1350: {
      slidesPerView: 2.9,
    },
  },
});

/*=============== Slider ===============*/
let programSevenCards = new Swiper(".programs_seven_card", {
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
      slidesPerView: 1.6,
    },

    600: {
      slidesPerView: 2,
    },

    708: {
      slidesPerView: 3,
    },

    808: {
      slidesPerView: 4,
    },

    968: {
      slidesPerView: 4,
    },

    1100: {
      slidesPerView: 4.4,
    },

    1160: {
      slidesPerView: 4,
    },

    1250: {
      slidesPerView: 4,
    },

    1350: {
      slidesPerView: 4.5,
    },
  },
});

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const firstFaqItem = document.querySelector(".faq-item");
  if (firstFaqItem) {
    firstFaqItem.querySelector(".faq-answer").style.maxHeight =
      firstFaqItem.querySelector(".faq-answer").scrollHeight + "px";
  }
});

function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");
  const allFaqItems = document.querySelectorAll(".faq-item");

  allFaqItems.forEach((item) => {
    item.classList.remove("active");
    item.querySelector(".faq-answer").style.maxHeight = null;
  });

  if (!isActive) {
    faqItem.classList.add("active");
    faqItem.querySelector(".faq-answer").style.maxHeight =
      faqItem.querySelector(".faq-answer").scrollHeight + "px";
  }
}

// Pagination

document.addEventListener("DOMContentLoaded", function () {
  const paginationLinks = document.querySelectorAll(".page-link");

  paginationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".page-item.active").classList.remove("active");
      this.parentElement.classList.add("active");
    });
  });
});

function showPopup() {
  document.getElementById("popupForm").style.display = "flex";

  // Pre-populate the major input field with three predefined categories
  const predefinedMajors = ["Computer Science", "Design", "Graphic Design"];
  predefinedMajors.forEach((major) => addTag(major));
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";

  // Clear the tags when the popup is closed
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => tag.remove());
}

document.addEventListener("DOMContentLoaded", function () {
  const majorInput = document.getElementById("majorInput");
  const tagContainer = document.querySelector(".tag_container");

  if (majorInput && tagContainer) {
    majorInput.addEventListener("change", function () {
      const selectedMajor = majorInput.value;
      if (selectedMajor) {
        addTag(selectedMajor);
        majorInput.value = "";
      }
    });

    function addTag(text) {
      const existingTags = Array.from(tagContainer.children).map((tag) =>
        tag.textContent.replace("×", "").trim()
      );
      if (existingTags.includes(text)) return;

      const tag = document.createElement("div");
      tag.className = "tag";
      tag.innerText = text;

      const removeButton = document.createElement("span");
      removeButton.className = "remove_tag";
      removeButton.innerHTML = "&times;";
      removeButton.onclick = function () {
        tag.remove();
      };

      tag.appendChild(removeButton);
      tagContainer.appendChild(tag);
    }
  }
});
