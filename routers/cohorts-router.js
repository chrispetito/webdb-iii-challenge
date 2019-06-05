const express = require('express');
const db = require('../models/cohorts-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
    .then(cohorts => res.status(200).json(cohorts).catch(err => {
        res.status(500).json(err)
    }))
})

module.exports = router;