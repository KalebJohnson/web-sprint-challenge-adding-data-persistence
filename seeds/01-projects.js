
exports.seed = function(knex) {
  // Deletes ALL existing entries .... truncate for fresh start
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_title: 'Sprint', description:"node DB sprint", completed:true},
        {project_title: 'Kalebs Project 1', description:"project 1", completed:false},
        {project_title: 'Kalebs Project 2', description:" project 2", completed:false},
      ]);
    });
};
