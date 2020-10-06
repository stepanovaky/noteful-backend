const express = require('express');
const FolderService = require('../src/folder-service');

const foldersRouter = express.Router();
const jsonParser = express.json();

foldersRouter
    .route('/foldersfetch')
    .get((req, res, next) => {
        FolderService.getAllFolders(
            req.app.get('db')
        )
            .then(folders => {
                res.json(folders)
            })
            .catch(next)
    })
    // .post(jsonParser, (req, res, next) => {
    //     const { name } = req.body
    //     const id = uuid();
    //     const newFolder = { id, name }
    //     FolderService
    // })



    // app.get('/foldersfetch', (req, res, next) => {
    //     FolderService.getAllFolders(knexInstance)
    //       .then(folders => {
    //         res.json(folders)
    //       })
    //       .catch(next)
            
    // });

module.exports = foldersRouter;