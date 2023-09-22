export const changeInputPlaceholder = (elem) => {
   let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   if (w < 475) {
      elem.attributes.placeholder.value = 'email address';
   } else {
      elem.attributes.placeholder.value = 'Enter email address';
   }
}