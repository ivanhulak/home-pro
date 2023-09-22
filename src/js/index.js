import mobileNav from './modules/mobile-nav.js';
import initReviewSwiper from './modules/review-swiper';
import { readMore } from './modules/read-more';
import { faqAccordion } from './modules/faq-accordion.js';
import { changeInputPlaceholder } from './modules/change-placeholder';

const input = document.querySelector('.form-subscribe__input');
mobileNav();
initReviewSwiper();
readMore();
faqAccordion();
window.addEventListener('resize', changeInputPlaceholder(input))