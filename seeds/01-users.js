
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test1', password:"$2a$05$kb94szYyr9jtpxFV8M1lWO1jSUZM3CWDcyWcqSVIcfQB0b1qjHawq"},
        {username: 'test2', password:"$2a$05$kb94szYyr9jtpxFV8M1lWO1jSUZM3CWDcyWcqSVIcfQB0b1qjHawq"},
        {username: 'test3', password:"$2a$05$kb94szYyr9jtpxFV8M1lWO1jSUZM3CWDcyWcqSVIcfQB0b1qjHawq"},
        {username: 'test4', password:"$2a$05$kb94szYyr9jtpxFV8M1lWO1jSUZM3CWDcyWcqSVIcfQB0b1qjHawq"},
      ]);
    });
};
