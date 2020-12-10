const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text')
let load = 0; 

setInterval(time, 30); 


function time() {
  load++; 
  if(load < 100){
    bg.style = `filter: blur(${scale(load,0,100,30,0)}px)`;
   text.style = `opacity: ${scale(load, 0,100,1,0)}`;
   text.innerText = load + "%";
  }

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}