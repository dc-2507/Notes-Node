console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
console.log('Yargs', argv);

var command = argv._[0];
console.log('Command : ',command);

if(command === 'add')
{
    var note = notes.addNote(argv.title, argv.body);
    var t = typeof note;
    if(note){
    console.log("Note added");
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log("--");
    }
    else
    console.log("Duplicate insertion");
}

else if(command === 'list')
{
    notes.getAll();
}

else if(command === 'read')
{
    notes.read(argv.title);
}

else if(command === 'remove')
{
    var noteRemoved = notes.remove(argv.title);
    var message = noteRemoved ? 'Note was removed.': 'Note not found.' ;
    console.log(message);
}

else
{
    console.log('Command Not found.');
}