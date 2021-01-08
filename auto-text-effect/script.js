const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!';
const weekend = 'Have a good weekend'
let idx = 1; 
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0,idx);
  idx++; 
  if(idx > text.length) {
    const weekendParagraph = document.createElement('p');
    weekendParagraph.classList.add('text');
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    console.log(heart);
    weekendParagraph.innerText = weekend;
    const stedet = document.querySelector('body').firstElementChild;
    stedet.insertAdjacentElement('afterend', weekendParagraph)
    weekendParagraph.appendChild(heart);
    idx = 1;
    setTimeout(() => {
      weekendParagraph.remove();
    },500)
  }
  setTimeout(writeText, speed)
}
writeText()

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
})
