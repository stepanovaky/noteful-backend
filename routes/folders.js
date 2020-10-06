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
    .post(jsonParser, (req, res, next) => {
        const { id, name } = req.body
        const addedFolder = { id: id, name: name }
        FolderService.insertFolder(
            req.app.get('db'), 
            addedFolder
        )
        .then(folder => {
            res
                .status(201)
                .location(`/folders/${id}`)
                .json(folder)
        })
    })



    // app.get('/foldersfetch', (req, res, next) => {
    //     FolderService.getAllFolders(knexInstance)
    //       .then(folders => {
    //         res.json(folders)
    //       })
    //       .catch(next)
            
    // });

module.exports = foldersRouter;