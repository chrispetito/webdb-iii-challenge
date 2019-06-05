exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Ben", cohort_id: 1 },
        { name: "Tom", cohort_id: 1 },
        { name: "Jerry", cohort_id: 1 }
      ]);
    });
};
