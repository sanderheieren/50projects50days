
const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
  container.innerHTML = `
     <div class="event key">
        <small>event.key</small>
        <p>${e.key === ' ' ? "space" : e.key}</p>
      </div>
      <div class="event keyCode">
        <small>event.keyCode</small>
        <p>${e.keyCode}</p>
      </div>
      <div class="event code">
        <small>event.code</small>
        <p>${e.code}</p>
      </div>
  `
})