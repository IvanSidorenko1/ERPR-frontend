jQuery(document).ready(function () {
  // menu (добавление класса при клике)
  jQuery(".header__burger-menu").click(function () {
    jQuery(".header__burger-menu").toggleClass("_js--open-menu");
    jQuery(".header__menu").toggleClass("_js--open-menu");
    jQuery("body").toggleClass("noscroll");
  });
  jQuery(".header__menu, .fixed-block").on("click", "a", function (event) {
    jQuery(".header__burger-menu").removeClass("_js--open-menu");
    jQuery(".header__menu").removeClass("_js--open-menu");
    jQuery("body").removeClass("noscroll");
  });

  // плавный скрол при нажатии на якорную кнопку
  jQuery(".header__menu, .fixed-block, .about__list").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      var id = jQuery(this).attr("href"),
        top = jQuery(id).offset().top;
      jQuery("body,html").animate({ scrollTop: top - 0 }, 800);
    }
  );
  // ініціалізація слайдера slider
  jQuery(".social-media__list").addClass("owl-carousel owl-theme");
  jQuery(".social-media__list").owlCarousel({
    margin: 40,
    items: 3,
    dots: false,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        margin: 10,
        items: 1.4,
      },

      600: {
        items: 4.2,
        margin: 20,
      },
      1450: {
        margin: 40,
        items: 4.2,
      },
    },
    // autoWidth: true,
  });
  ////////////////сховати шапку при скролі вниз і показати при скролі вверх////////////////////
  let g_top = 0;
  jQuery(window).scroll(function () {
    if (window.scrollY > window.innerHeight / 2) {
      let top = jQuery(this).scrollTop();
      if (top > g_top) {
        jQuery(".header").addClass("fadeOut");
      } else {
        jQuery(".header").removeClass("fadeOut");
      }
      g_top = top;
    }

    if (window.scrollY > window.innerHeight / 2) {
      jQuery(".fixed-block").addClass("_active");
    } else {
      jQuery(".fixed-block").removeClass("_active");
    }
  });
});
///////////////////////////////////////////////////////

jQuery(".footer__form-input").on("input keyup", function () {
  jQuery(this)
    .parents(".footer__form-label")
    .find(".footer__form-label-text")
    .hide();
});

jQuery(".footer__form-input").blur(function () {
  if (jQuery(this).val().trim() === "") {
    jQuery(this)
      .parents(".footer__form-label")
      .find(".footer__form-label-text")
      .show();
  }
});

// добавление класса для анимаци при скроле // ._anim-items///

const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_js_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_js_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 200);
}

// добавление класса для анимаци при скроле //baners///

const baners = document.querySelectorAll("._js-media--wrapper");

if (baners.length > 0) {
  window.addEventListener("scroll", OnScroll);
  function OnScroll() {
    for (let index = 0; index < baners.length; index++) {
      const baner = baners[index];
      const media = baner.querySelector("._js-media");
      const animItemHeight = baner.offsetHeight;
      const animItemOffset = offset(baner).top - 100;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset
      ) {
        media.style.height = (pageYOffset / animItemOffset) * 50 + 55 + "%";
        media.style.width = (pageYOffset / animItemOffset) * 50 + 55 + "%";
        media.style.opacity = (pageYOffset / animItemOffset) * 0.6 + 0.43;
      } else {
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    OnScroll();
  }, 200);
}

// ////////////////////////////////////////////////
