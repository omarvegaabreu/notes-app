const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version

yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {

    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'text',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
   notes.addNote(argv.title, argv.body);
    
  }
});
// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {

    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNotes(argv.title)
    console.log('Removing the note is working!');
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


yargs.parse();



