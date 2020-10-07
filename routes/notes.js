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
    .post(jsonParser, (req, res, next) => {
        const { id, name, modified, folderid, content } = req.body
        const addedNote = { id: id, name: name, modified: modified, folderid: folderid, content: content }
        NoteService.insertNote(
            req.app.get('db'),
            addedNote
        )
        .then(note => {
            res
                .status(201)
                .location(`/notes/${id}`)
                .json(note)
        })
    })
  


    notesRouter
        .route(`/note/:id`)
        .delete((req, res, next) => {
            NoteService.deleteNote(
                req.app.get('db'),
                req.params.id
                
            )
                .then(() => {
                    res.status(204).end()
                })
                .catch(next)
        })

module.exports = notesRouter;