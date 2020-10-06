require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const NoteService = require('./note-service')
const foldersRouter = require('../routes/folders')
const notesRouter = require('../routes/notes')


const app = express();

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

// app.use(foldersRouter);
// app.use(notesRouter);

app.get('/foldersfetch', (req, res, next) => {
    FolderService.getAllFolders(knexInstance)
      .then(folders => {
        res.json(folders)
      })
      .catch(next)
        
});

app.get('/notesfetch', (req, res, next) => {
  NoteService.getAllNotes(knexInstance)
    .then(notes => {
      res.json(notes)
    })
    .catch(next)
})



app.use(function errorHandler(error, req, res, next) {
   let response
   if (NODE_ENV === 'production') {
     response = { error: { message: 'server error' } }
   } else {
     console.error(error)
     response = { message: error.message, error }
   }
   res.status(500).json(response)
 })

module.exports = app;

const knex = require('knex');



const db = knex({
    client: 'pg', 
    connection: process.env.DB_URL,
})

app.set('db', db);