const knex = require('knex');

const knexInstance = knex({
    client: 'pg', 
    connection: process.env.DB_URL,
})

// const folders = knexInstance('folders').select('id').where({ name: 'Important' }).then(result => {
//     console.log(result)
// }) //remember that this prints out the id of a folder

module.exports = knexInstance;