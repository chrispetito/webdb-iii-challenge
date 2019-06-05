const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cohorts', (req, res) => {
    db('cohorts').then(response => {
        res.status(200).json(response)
    })
})

const port = process.env.PORT || 4000;
server.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})