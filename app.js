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
    notes.addNote(argv.title, argv.body);
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
    notes.remove(argv.title);
}
else
{
    console.log('Command Not found.');
}