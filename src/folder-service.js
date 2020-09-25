const knex = require('knex')

const FolderService = {
    getAllFolders(knex) {
        return knex
            .select('*')
            .from('folders');
    }
}

module.exports = FolderService;