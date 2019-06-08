console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try
    {
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch(e)
    {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var getAll = () => {
    return fetchNotes();
};

var read = (title) => {
    var notes = fetchNotes();
    var readNote = notes.filter((note) => note.title == title);
    return readNote[0];
}

var remove = (title) => {
    var notes = fetchNotes();
    var newNote = notes.filter((note) => note.title !== title);
    saveNotes(newNote);

    return notes.length !== newNote.length;
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title : title,
        body : body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var logNote = (note) => {
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log("----");
}

module.exports = {
    addNote : addNote,
    getAll : getAll,
    read : read,
    remove : remove,
    logNote : logNote
};