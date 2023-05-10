const router = require("express").Router();
const { createNewNote, readNotes } = require('../lib/noteFunction');

router.get('/', (req, res) => {
    
    readNotes().then(notes => {
        const parseNotes = [].concat(JSON.parse(notes));  
        res.json(parseNotes);
    }) 
    
})

router.post('/', (req, res) => {
    createNewNote(req.body);
    res.json(req.body);
})


module.exports = router;