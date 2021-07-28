const addNote = document.getElementById('addNote');
const noteContainer = document.getElementById('note-container');
const removeBtn = document.getElementById('removeBtn');
const popUpTitle = document.getElementById('popUpTitle');
const popUpBody = document.getElementById('popUpBody');

addNote.addEventListener('click', () => {
  
  //  create notes

  let titleInput = document.getElementById('titleInput').value,
  contentInput = document.getElementById('contentInput').value,
  note = document.createElement('div'),
  title = document.createElement('span'),
  content = document.createElement('span'),
  detailBtn = document.createElement('button'),
  removeBtn = document.createElement('button'),
  closePopUp = document.getElementById('closePopUp');

  title.innerHTML = titleInput;
  content.innerHTML = contentInput;
  detailBtn.innerHTML = 'Details';
  removeBtn.innerHTML = '&times';
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
  });
  
  //  popup for detail

  detailBtn.addEventListener('click', () => {
    popUp = document.getElementById('popUp');
    popUp.className = 'popUp-active';

    popUpTitle.innerHTML = titleInput;
    popUpBody.innerHTML = contentInput;
  });

  //  close popup

  closePopUp.addEventListener('click', () => {
    popUp = document.getElementById('popUp');
    popUp.className = 'popUp';
  });

});



