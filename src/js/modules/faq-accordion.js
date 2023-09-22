export const faqAccordion = () => {
   const listQuestions = document.querySelectorAll('.faq__question');

   listQuestions.forEach(question => {
      if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
         question.ontouchstart = () => {
            question.classList.toggle('faq__question--active')
            const pannel = question.lastElementChild
            if (pannel.style.maxHeight) {
               pannel.style.maxHeight = null;
            } else {
               pannel.style.maxHeight = pannel.scrollHeight + "px";
            }
         }
      } else {
         question.onclick = () => {
            question.classList.toggle('faq__question--active')
            const pannel = question.lastElementChild
            if (pannel.style.maxHeight) {
               pannel.style.maxHeight = null;
            } else {
               pannel.style.maxHeight = pannel.scrollHeight + "px";
            }
         }
      }
   })
}