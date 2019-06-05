const db = require('../dbconfig');

module.exports = {
    find,
    findById,
    add,
    getCohortStudents,
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

  function getCohortStudents(userId) {
    return db('students')
      .join('cohorts', 'cohorts.id', 'students.cohort_id')
      .select('students.id', 'students.name')
      .where('students.cohort_id', userId);
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
  