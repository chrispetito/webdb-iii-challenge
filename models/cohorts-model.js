const db = require('../dbconfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('cohorts')
}

function findById(id) {
    return db("cohorts")
      .where({ id })
      .first();
  }
  
  function add(cohort) {
    return db("cohorts")
      .insert(cohort)
      .then(cohort => {
        return findById(cohort[0]);
      });
  }
  
  function update(id, changes) {
    return db("cohorts")
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db("cohorts")
      .where("id", id)
      .del();
  }
  