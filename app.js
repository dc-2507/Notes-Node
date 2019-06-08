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
    notes.logNote(note);
    }
    else
    console.log("Duplicate insertion");
}

else if(command === 'list')
{
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'read')
{
    var noteRead = notes.read(argv.title);
    if(noteRead)
    {
        console.log("Note read");
        notes.logNote(noteRead);
    }
    else
    console.log("Note not found.");
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