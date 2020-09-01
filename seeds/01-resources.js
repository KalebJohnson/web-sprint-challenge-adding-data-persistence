
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_title: 'Computer', description:"Some stuff", project_assignment:"Sprint"},
        {resource_title: 'Internet connection', description:"some more stuff", project_assignment:"Sprint"},
        {resource_title: 'Some knowledge', description:"and more stuff", project_assignment:"Sprint"},
      ]);
    });
};
