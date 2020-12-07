const progress  = document.getElementById('progress');
const circles =  document.querySelectorAll('.circle');
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let activeCircles = 1; 

const update = () => {
  circles.forEach((circle, index) => {
    if(index + 1 <= activeCircles) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })
  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + "%";


}
next.addEventListener('click', () => {
  activeCircles++;
  prev.disabled = false;
  if(activeCircles >= circles.length) {
    activeCircles = circles.length;
    console.log('koom inn');
    next.disabled = true;
  }
  update()
})
prev.addEventListener('click', () => {
  activeCircles--;
next.disabled = false;
  if(activeCircles <= 1) {
    activeCircles = 1;
    console.log('koom inn');
    prev.disabled  = true;
  }
  update()
})
