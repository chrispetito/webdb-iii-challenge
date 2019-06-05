const express = require('express');
const helmet = require('helmet');

const cohortsRouter = require('../routers/cohorts-router');
const studentsRouter = require('../routers/students-router');

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/cohorts', cohortsRouter)
server.use('/api/students', studentsRouter)

module.exports = server;