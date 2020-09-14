
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userinfo').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('userinfo').insert([
        {user_id: 1 , eyeColor:"blue", age: 23 , Hobbies: "MotoVlogs"},
        {user_id: 2 , eyeColor:"brown", age: 33 , Hobbies: "Gaming"},
        {user_id: 3 , eyeColor:"green", age: 45 , Hobbies: "Hunting"},
      ]);
    });
};

