const addBtn = document.getElementById('addBtn');
const noteContainer = document.getElementById('note-container')

addBtn.addEventListener('click', () => {
  // let li = document.createElement('li');
  let titleInput = document.getElementById('titleInput').value;
  let contentInput = document.getElementById('contentInput').value;
  let note = document.createElement('div');
  let title = document.createElement('span');
  let content = document.createElement('span');
  let details = document.createElement('button');

  title.innerHTML = titleInput;
  content.innerHTML = contentInput;
  note.appendChild(title);
  note.appendChild(content);
  note.appendChild(details);

  details.innerText = 'Details'
  note.className = 'note'

  noteContainer.appendChild(note);

  // noteContainer.appendChild(li);
});