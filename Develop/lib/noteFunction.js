const fs = require("fs");
const path = require("path");
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function readNotes() {
   return readFileAsync(path.join(__dirname, '../db/db.json'), "utf8")
}

function createNewNote(body) {
    readNotes().then(notes => {
        const parseNotes = [].concat(JSON.parse(notes));  
        parseNotes.push(body);
        writeFileAsync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(parseNotes)
        );
    }) 
   }

module.exports = {
    createNewNote, 
    readNotes
};