const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const colors = ['red','blue','green'];

button.addEventListener('click', createNotifaction1);


function createNotifaction() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  },3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// trial
function createNotifaction1() {
  const toast = document.createElement('div');
  const randomMessage = Math.floor(Math.random() * messages.length);
  const randomColor = Math.floor(Math.random() * colors.length);
  toast.classList.add('toast');
  toast.innerText = messages[randomMessage];
  toast.style.color = colors[randomColor];
  setTimeout(() => {
    toasts.removeChild(toast)
  },3000)
  toasts.appendChild(toast);
}

//just wanted to
// const fib = (n, memo={}) => {
//   if( n <=2 ) return 1;
//   for(let num in memo) {
//     if(n == num) return memo[n];
//   } 
//   memo[n] = fib(n-1,memo) + fib(n-2,memo)
//   return memo[n];
// }
