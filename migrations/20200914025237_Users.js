exports.up = function (knex) {
    return knex.schema
    .createTable("users", (tbl) => {
        tbl.increments("id")
        tbl.text("username", 17).unique().notNullable()
        tbl.text("password", 128).notNullable();
    })
    .createTable('userinfo', tbl => {
        tbl.increments("id");
        tbl.integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.text('eyeColor', 20)
           .defaultTo("N/A");
        tbl.integer("age", 3 )
            .defaultTo("N/A");
        tbl.text("hobbies", 128)
            .defaultTo("N/A");
    })
}

exports.down = async function (knex) {
    return knex.schema
    .dropTableIfExists("userinfo") 
    .dropTableIfExists("users")   
}// make sure to add these "backwards/reverse"