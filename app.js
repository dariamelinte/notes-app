const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote }  = require('./notes');

//customize yargs version
yargs.version('1.1.0');

//create add command
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
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title, body }) => addNote(title, body),
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => removeNote(title),
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => readNote(title)
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: listNotes,
})

yargs.parse();