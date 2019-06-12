const server = require('./api/server');
const express = require('express');

server.use(express.json());

// server.get('/api/cohorts', (req, res) => {
//     db('cohorts').then(response => {
//         res.status(200).json(response)
//     })
// })

// server.get('/api/students', (req, res) => {
//     db('students').then(response => {
//         res.status(200).json(response)
//     })
// })

const port = process.env.PORT || 4000;
server.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})