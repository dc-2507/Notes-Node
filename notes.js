console.log('Starting notes.js');

var getAll = () => {
    console.log('Getting all Notes.');
};

var read = (title) => {
    console.log('Getting note titled ',title);
}

var remove = (title) => {
    console.log('Removing note titled ',title);
}

var addNote = (title, body) => {
    console.log('Adding Note',title,body);
};
module.exports = {
    addNote : addNote,
    getAll : getAll,
    read : read,
    remove : remove
};