const knex = require('knex')

const NoteService = {
    getAllNotes(knex) {
        return knex
            .select('*')
            .from('notes');
    },
    deleteNote(knex, id) {
        return knex('notes')
        .where({ id })
        .delete()
} }

module.exports = NoteService;