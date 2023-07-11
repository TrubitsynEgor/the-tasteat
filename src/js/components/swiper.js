import {
  Swiper,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);

const reviewsSlider = new Swiper(".reviews__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1.6,
    },
  },
});
