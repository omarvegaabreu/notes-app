const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version

yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'Add',
  describe: 'Add a new note ',
  handler: function() {
    console.log('Adding a new note!')
  }
});



console.log(yargs.argv);



