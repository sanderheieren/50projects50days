const buttons = document.querySelectorAll('.buttons');
const faq = 
buttons.forEach(btn => {
btn.addEventListener('click', () => {
  btn.parentNode.classList.toggle('active');
})
})