const addBtn = document.getElementById('addBtn');
const noteContainer = document.getElementById('note-container')

addBtn.addEventListener('click', () => {
  // let li = document.createElement('li');
  let titleInput = document.getElementById('titleInput').value;
  let contentInput = document.getElementById('contentInput').value;
  let note = document.createElement('div');
  let title = document.createElement('span');
  let content = document.createElement('span');
  let detailBtn = document.createElement('button');
  let removeBtn = document.createElement('button');



  title.innerHTML = titleInput;
  content.innerHTML = contentInput;
  detailBtn.innerText = 'Details'
  removeBtn.innerHTML = 'x'
  note.appendChild(title);
  note.appendChild(content);
  note.appendChild(detailBtn);
  note.appendChild(removeBtn);

  title.className = 'noteTitle'
  content.className = 'noteContent'
  note.className = 'note'
  detailBtn.id = 'detailBtn'
  removeBtn.id = 'removeBtn'


  noteContainer.appendChild(note);

  // noteContainer.appendChild(li);
});