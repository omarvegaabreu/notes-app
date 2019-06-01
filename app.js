const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version

yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption:'true',
    }
  },
  handler: function (argv) {
    console.log('Adding a new note!' , argv);
  }
})
// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note!');
  }
})

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log('Listing a notes')
  }
})

yargs.command({
  command: "read",
  describe: "read all the notes",
  handler: function() {
    console.log("Reading notes! ");
  }
});


console.log(yargs.argv);



