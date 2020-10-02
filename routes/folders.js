const express = require('express');
const FolderService = require('./folder-service');

const foldersRouter = express.Router();
const jsonParser = express.json();

const uuid = require( 'v4 uuid')


foldersRouter
    .route('/foldersfetch')
    .get((req, res, next) => {
        FolderService.getAllFolders(
            req.app.get('db')
        )
            .then(folders => {
                res.json(folders)
            })
            .catch(next)9709708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897089708970897088907UIKLJOP7UI7UI7UI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7PUI7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7PUI7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7UIP7PUI7PUI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI7UI8
    })
    .post(jsonParser, (req, res, next) => {
        const { name } = req.body
        const id = uuid();
        const newFolder = { id, name }
        FolderService
    })



    // app.get('/foldersfetch', (req, res, next) => {
    //     FolderService.getAllFolders(knexInstance)
    //       .then(folders => {
    //         res.json(folders)
    //       })
    //       .catch(next)
            
    // });