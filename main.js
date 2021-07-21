const addBtn = document.getElementById('addBtn');
const noteContainer = document.getElementById('note-container')

addBtn.addEventListener('click', () => {
  // let li = document.createElement('li');
  let titleInput = document.getElementById('titleInput').value;
  let contentInput = document.getElementById('contentInput').value;
  let title = document.createElement('span')
  let content = document.createElement('span')

  title.innerHTML = titleInput;
  content.innerHTML = contentInput;
  noteContainer.appendChild(title);
  noteContainer.appendChild(content);

  // noteContainer.appendChild(li);
});