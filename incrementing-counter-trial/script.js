const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = counter.getAttribute('data-target');
  const increment = target / 200;

 
  counter.innerText = '0';
  console.log(increment);

  const updateCounter = () => {
    let innerValue = +counter.innerText;
  console.log(innerValue);
    if(innerValue < target) {
      innerValue += Math.ceil(increment);
      counter.innerText  = innerValue;
      setTimeout(updateCounter, 1);
    }

  }
  updateCounter();
})