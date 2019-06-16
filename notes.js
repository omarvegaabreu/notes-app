const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Welcome to the notes app :) ";
console.log(chalk.green.inverse(getNotes()));

// Will add note, arguments needed are title and body
const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

//will remove notes
const removeNotes = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!!!"));
  }
};

//fill save notes to notes.json file
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
//function load notes from notes.json file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
//List note command: Will list the titles for each note
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes!!"));

  notes.forEach(note => {
    console.log(note.title);
  });
};

//function to read notes from json file
// const readNote = title => {
//   const notes = loadNotes();
//   const note = notes.find(note => note.title === title);
//   if (note) {
//     console.log(chalk.inverse(note.title));
//     console.log(note.body);
//   } else {
//     console.log(chalk.red.inverse("Note note found!"));
//   }
// };

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};
