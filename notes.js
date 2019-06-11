const getNotes = function () {
  return 'Your notes... '
}

const addNote = function (title, body) {
  const notes = loadNotes();
};

const loadNotes = function () {
  const dataBuffer = fs.readFileSync('notes.json');
  
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote
};

