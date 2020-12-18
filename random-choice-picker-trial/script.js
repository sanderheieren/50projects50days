const tags = document.querySelector('.tags');
const textareaInput = document.querySelector('.textarea');

textareaInput.addEventListener('keyup', (e) => {
  console.log(e.target.value);

  populateTag(e.target.value);
})

function populateTag(input) {
  const tagDiv = document.createElement('div');
  tagDiv.classList.add('tag');

  const tag = input.trim().split(',');
  // if(tag.length > 0){
    
  // }
  console.log(tag);
  tagDiv.innerText = tag;
  tags.appendChild(tagDiv);
}