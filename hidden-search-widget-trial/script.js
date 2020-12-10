const btn  = document.querySelector('.btn');
const search = document.querySelector('.search')
const form = document.querySelector('.form')
const input = document.querySelector('.input')

btn.addEventListener('click', (e) => {
  console.log(input.value);
  search.classList.toggle('active');
  input.focus();
  input.value ="";

})

form.addEventListener('submit', (e) => {
  e.stopPropagation();
  e.preventDefault();
  console.log('sumbitted, why am i not comming in here?');
})
