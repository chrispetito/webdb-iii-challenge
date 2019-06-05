const db = require('../dbconfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('students')
}

function findById(id) {
    return db("students")
      .where({ id })
      .first();
  }
  
  function add(student) {
    return db("students")
      .insert(student)
      .then(student => {
        return findById(student[0]);
      });
  }
  
  function update(id, changes) {
    return db("students")
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db("students")
      .where("id", id)
      .del();
  }