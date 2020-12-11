const contentHolders = document.querySelectorAll('.content');


const addContentBox = () => {
 const bottom = window.innerHeight / 5 * 4;
  contentHolders.forEach(contentHolder => {
   const heightOfDiv = contentHolder.getBoundingClientRect().top;
   if(heightOfDiv < bottom) {
     contentHolder.classList.add('show');
   } else {
     contentHolder.classList.remove('show')
   }
  })
}
window.addEventListener('scroll', addContentBox); 