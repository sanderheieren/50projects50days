const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound => {
  const button = document.createElement('button');
  const buttons = document.getElementById('buttons');
  button.innerText=sound; 
  buttons.appendChild(button);

  button.addEventListener('click', () => {
    const board = document.getElementById(sound);
    stopSongs();
    board.play();
  })

})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })
}