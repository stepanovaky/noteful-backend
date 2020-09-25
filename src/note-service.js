const knex = require('knex')

const NoteService = {
    getAllNotes(knex) {
        return knex
            .select('*')
            .from('notes');
    }
}

module.exports = NoteService;