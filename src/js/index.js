import mobileNav from './modules/mobile-nav.js';
import {readMore} from './modules/read-more';
import {faqAccordion} from './modules/faq-accordion.js';
import {changeInputPlaceholder} from './modules/change-placeholder';

const input = document.querySelector('.form-subscribe__input');
mobileNav();
readMore();
faqAccordion();
window.addEventListener('resize', changeInputPlaceholder(input))