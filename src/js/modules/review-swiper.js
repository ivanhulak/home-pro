import Swiper from 'swiper/bundle';
import 'swiper/css';


function initReviewSwiper() {
   const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 50,
      autoHeight: true,

   
      // If we need pagination
      pagination: {
         el: '.review__bullets',
         clickable: true,
      },
   
      // Navigation arrows
      navigation: {
         nextEl: '.review__btn--next',
         prevEl: '.review__btn--prev',
      },
   });
}

export default initReviewSwiper;