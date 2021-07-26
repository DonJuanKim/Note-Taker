const addBtn = document.getElementById('addBtn');
const noteContainer = document.getElementById('note-container');
const removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', () => {
  let titleInput = document.getElementById('titleInput').value;
  let contentInput = document.getElementById('contentInput').value;
  let note = document.createElement('div');
  let title = document.createElement('span');
  let content = document.createElement('span');
  let detailBtn = document.createElement('button');
  let removeBtn = document.createElement('button');

  title.innerHTML = titleInput;
  content.innerHTML = contentInput;
  detailBtn.innerText = 'Details';
  removeBtn.innerHTML = 'x';
  note.appendChild(title);
  note.appendChild(content);
  note.appendChild(detailBtn);
  note.appendChild(removeBtn);

  title.className = 'noteTitle';
  content.className = 'noteContent';
  note.className = 'note';
  note.id = "note";
  detailBtn.id = 'detailBtn';
  removeBtn.id = 'removeBtn';
  
  noteContainer.appendChild(note);

//  remove button
  removeBtn.addEventListener('click', () => {
    note.remove();
  })

//  detail button
  detailBtn.addEventListener('click', () => {
    alert('Full text'+ content);

  })
});  

