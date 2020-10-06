const express = require('express');
const NoteService = require('../src/note-service');

const notesRouter = express.Router();
const jsonParser = express.json();

notesRouter
    .route('/notesfetch')
    .get((req, res, next) => {
        NoteService.getAllNotes(
            req.app.get('db')
        )
            .then(notes => {
                res.json(notes)
            })
            .catch(next)
    })


module.exports = notesRouter;