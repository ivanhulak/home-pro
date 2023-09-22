export const readMore = () => {
   const readMoreBtns = document.querySelectorAll('.card-blog__more-btn');
   const contentBlocks = document.querySelectorAll('.card-blog__content');

   readMoreBtns.forEach(btn => {
      btn.onclick = () => {
         btn.classList.toggle('active')
         contentBlocks.forEach(block => {
            if(btn.parentNode === block){
               block.classList.toggle('card-blog__content--active')
            }
         })
         btn.classList.contains('active') ? btn.textContent = 'less' : btn.textContent = 'more'
      }
   })
}