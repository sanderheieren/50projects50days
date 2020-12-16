const faq = document.querySelectorAll('.faq');
const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
})
})