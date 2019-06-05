const express = require("express");
const db = require("../models/cohorts-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.find().then(cohorts =>
    res
      .status(200)
      .json(cohorts)
      .catch(err => {
        res.status(500).json(err);
      })
  );
});

router.get("/:id", (req, res) => {
  db.findById(req.params.id).then(cohort => {
    res
      .status(200)
      .json(cohort)
      .catch(err => {
        res.status(500).json(err);
      });
  });
});

router.get('/:id/students', (req, res) => {
    db.getCohortStudents(req.params.id).then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
