const button = document.querySelector('.btn');
const joke = document.querySelector('.joke-text');


const generateJoke = async  () => {
  const config  = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const response = await fetch('https://icanhazdadjoke.com/',config);
  const data = await response.json();
  joke.innerHTML = data.joke;
}
button.addEventListener('click', generateJoke);
generateJoke();