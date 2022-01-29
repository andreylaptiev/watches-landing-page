'use script';


window.addEventListener('load', newWatchesSwiperHandler);
window.addEventListener('resize', newWatchesSwiperHandler);

window.addEventListener('load', newStuffSwiperHandler);
window.addEventListener('resize', newStuffSwiperHandler);

window.addEventListener('load', brandsSwiperHandler);
window.addEventListener('resize', brandsSwiperHandler);


// new-watches swiper
const newWatchesSwiper = new Swiper('.new-watches__items', {
  init: false,
  scrollbar: {
    el: '.new-watches-scrollbar',
    draggable: true,
    hide: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    701: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    881: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1201: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

function newWatchesSwiperHandler() {
  // swiper container
  let swiperContainer = document.querySelector('.new-watches__items');
  // // swiper wrapper
  let swiperWrapper = document.querySelector('.new-watches__wrapper-holder');
  // // swiper slides
  let swiperSlides = document.querySelectorAll('.new-watches__watch-item');

  if (window.innerWidth <= 1700) { // initialize Swiper if width <= 1700px
    swiperContainer.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
    swiperSlides.forEach(element => element.classList.add('swiper-slide'));
    newWatchesSwiper.init();
    newWatchesSwiper.enable();
  } else if (window.innerWidth > 1700) { // no Swiper
    swiperContainer.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperSlides.forEach(element => element.classList.remove('swiper-slide'));
    newWatchesSwiper.disable();
  };
};


// new-stuff swipers
const newStuffSwiper1 = new Swiper('#new-stuff-1', {
  init: false,
  scrollbar: {
    el: '.new-stuff-scrollbar1',
    draggable: true,
    hide: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    881: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    701: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

const newStuffSwiper2 = new Swiper('#new-stuff-2', {
  init: false,
  scrollbar: {
    el: '.new-stuff-scrollbar2',
    draggable: true,
    hide: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    881: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    701: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

function newStuffSwiperHandler() {
  // swiper container
  let swiperContainers = document.querySelectorAll('.new-stuff');
  // // swiper wrapper
  let swiperWrappers = document.querySelectorAll('.new-stuff__wrapper-holder');
  // // swiper slides
  let swiperSlides = document.querySelectorAll('.new-stuff__watch-item');

  if (window.innerWidth <= 1800) { // initialize Swipers if width <= 1800px
    swiperContainers.forEach(element => element.classList.add('swiper'));
    swiperWrappers.forEach(element => element.classList.add('swiper-wrapper'));
    swiperSlides.forEach(element => element.classList.add('swiper-slide'));
    newStuffSwiper1.init();
    newStuffSwiper1.enable();
    newStuffSwiper2.init();
    newStuffSwiper2.enable();
  } else if (window.innerWidth > 1800) { // no Swipers if width > 1800px
    swiperContainers.forEach(element => element.classList.remove('swiper'));
    swiperWrappers.forEach(element => element.classList.remove('swiper-wrapper'));
    swiperSlides.forEach(element => element.classList.remove('swiper-slide'));
    newStuffSwiper1.disable();
    newStuffSwiper2.disable();
  };
};


// our brands swiper
const ourBrandsSwiper = new Swiper('.brands', {
  init: false,
  scrollbar: {
    el: '.brands-scrollbar',
    draggable: true,
    hide: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    881: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    701: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

function brandsSwiperHandler() {
  // swiper container
  let swiperContainer = document.querySelector('.brands');
  // // swiper wrapper
  let swiperWrapper = document.querySelector('.brands__wrapper-holder');
  // // swiper slides
  let swiperSlides = document.querySelectorAll('.brands__image');

  if (window.innerWidth <= 1800) { // initialize Swiper if width <= 1800px
    swiperContainer.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
    swiperSlides.forEach(element => element.classList.add('swiper-slide'));
    ourBrandsSwiper.init();
    ourBrandsSwiper.enable();
  } else if (window.innerWidth > 1800) { // no Swiper
    swiperContainer.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperSlides.forEach(element => element.classList.remove('swiper-slide'));
    ourBrandsSwiper.disable();
  };
};

// burger menu
const burgerMenuBtn = document.querySelector('.header-main__burger-menu');

if (burgerMenuBtn) {
  const navigationMenu = document.querySelector('.header-main__navbar');
  burgerMenuBtn.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burgerMenuBtn.classList.toggle('_active');
  navigationMenu.classList.toggle('_active');
  });
};