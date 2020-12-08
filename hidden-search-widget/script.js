const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () =>{
  if(!search.classList.value.includes('active')){
    search.classList.add('active');
  } else {
    search.classList.remove('active')
  }
  input.focus();
})