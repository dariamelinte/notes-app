const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes ...";

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = JSON.parse(dataBuffer.toString());
        return data;
    } catch (err) {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (duplicateNote) {
        console.log(chalk.red('Ooops ! Title already in use. Please, choose another'));
    } else {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green('New note added !'));
    }    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const removedNote = notes.filter(note => note.title === title);
    if (removedNote.length) {
        notes.splice(removedNote, 1);
        console.log(chalk.magenta('Removed note !'));
    } else {
        console.log(chalk.yellow('Nothing to remove !'));
    }
    saveNotes(notes);
}

const listNotes = () => {
    console.log(chalk.magenta.bold('Your notes :'));
    const notes = loadNotes();
    notes.map(note => console.log(chalk.yellow(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('No matching note !'));
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}; 