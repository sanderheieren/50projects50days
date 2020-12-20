const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = counter.getAttribute('data-target');
  const increment = target / 200;
 
  counter.innerText = '0';

  const updateCounter = () => {
    let innerValue = +counter.innerText;

    if(innerValue < target) {
      innerValue += Math.ceil(increment);
      counter.innerText  = innerValue;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }

  }
  updateCounter();
})