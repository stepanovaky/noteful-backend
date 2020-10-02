const knex = require('knex')

const FolderService = {
    getAllFolders(knex) {
        return knex
            .select('*')
            .from('folders');
    },
    newFolder(knex) {
        return knex('folders')
            .insert({})

    }
}

module.exports = FolderService;