const knex = require('knex')

const FolderService = {
    getAllFolders(knex) {
        return knex
            .select('*')
            .from('folders');
    },
    newFolder(knex, newFolder) {
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateBookmark(knex, id, newFolderName) {
        return knex('folders')
        .where({ id })
        .update(newFolderName)
    }, 
    deleteBookmark(knex, id) {
        return knex('folders')
        .where({ id })
        .delete()
    }
}

module.exports = FolderService;