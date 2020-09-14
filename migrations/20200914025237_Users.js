exports.up = function (knex) {
    return knex.schema.createTable("users", (tbl) => {
        tbl.increments("id")
        tbl.text("username", 17).unique().notNullable()
        tbl.text("password", 128).notNullable()
    })


}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists("users")   
}// make sure to add these "backwards/reverse"