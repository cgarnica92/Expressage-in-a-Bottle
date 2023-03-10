const router = require('express').Router();
const store = require('../db/store');

//GET route that returns all notes from database
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
});

//POST route to add new note
router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

//DELETE route that removes note by ID
router.delete('/notes/:id', (req,res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json ({ ok: true }))
        .catch((err) => res.status(500).json(err));
})

module.exports = router;