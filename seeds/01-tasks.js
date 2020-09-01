
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id:"1", description: 'super interesting task', notes:"", completed: false},
        {project_id:"2", description: 'boring task', notes:"", completed: false},
        {project_id:"3", description: 'fun task', notes:"", completed: false},
      ]);
    });
};



