const tags = document.querySelector('.tags');
const textareaInput = document.querySelector('.textarea');

textareaInput.focus();

textareaInput.addEventListener('keyup', (e) => {
createTags(e.target.value);
 
  if(e.code === "Enter"){
    setTimeout(() => {
      e.target.value = ""
      startRandomizer();
    }, 30)
  }
})
function startRandomizer() {
  let times = 30;
  const interval = setInterval(() => {
    const randomTag = randomTagPicker();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {

      highlightTag(randomTagPicker())
    },100)
  }, times*100)
}
function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
function randomTagPicker() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}
// function highlightTag() {
//   const randomTag = Math.floor(Math.random() * tags.childElementCount);
//   tags.forEach(tag => console.log('jeg er en tag', tag))
//   console.log(randomTag);
//   console.log(tags[1]);
//   console.log(tags[randomTag]);
//   tags.c
//   tags[randomTag].classList.add('highlight')
// }

function createTags(input) {
  // console.log(input);
  const tagsArr = input.split(',').filter(tag => {
    // console.log(`%c${tag}`, "background-color:green; color:black");
    // console.log(`%c${tag.trim()}`, "background-color:yellow; color:black");
    return tag.trim() !== "";
  }).map(tag => tag.trim());
  // console.log(tags);
  tags.innerHTML = "";
  tagsArr.forEach(tag => {
    const tagEl = document.createElement('div');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tags.appendChild(tagEl);
  })
}