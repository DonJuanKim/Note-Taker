const addBtn = document.getElementById('addBtn');
const noteContainer = document.getElementById('note-container')

var noteArray = [
  {'Note' : noteInput}
]

addBtn.addEventListener('click', () => {
  let noteInput = document.getElementById('noteInput');
  let noteArray = [
    {'Note' : noteInput}
  ];
  noteArray.type('array')

  noteContainer.append(noteArray);

});