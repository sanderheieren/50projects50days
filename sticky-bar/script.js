const nav = document.querySelector('.nav');
const anchors = document.querySelectorAll('a');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if(window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

anchors.forEach(a=> {
  a.addEventListener('click', (e) => {
    e.preventDefault()
    clearCurrent()
    a.classList.add('current')
  })
})

function clearCurrent() {
  anchors.forEach(a => a.classList.remove('current'))
}
