const buttons = document.querySelectorAll('.ripple');

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    //cant use arrow function, changing to normal function
    this.appendChild(circle);

    setTimeout(() => {
      circle.remove()
    }, 500)
  })
})
// window.addEventListener('click', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   console.log(x,y, 'windoe');
// })