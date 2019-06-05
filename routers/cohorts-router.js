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
    db.findById(req.params.id)
      .then(cohort => {
        if (cohort) {
          res.status(200).json(cohort);
        } else {
          res.status(404).json({ message: "Cohort not found" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

router.get("/:id/students", (req, res) => {
  db.getCohortStudents(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then(() => {
      res
        .status(201)
        .json({ message: "You have successfully added a cohort!" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Succesfully updated." });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Cohort successfully deleted." });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
