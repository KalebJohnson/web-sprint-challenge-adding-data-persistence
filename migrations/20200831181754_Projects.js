exports.up = function (knex) {
    return knex.schema.createTable("projects", (tbl) => {
        tbl.increments("id")
        tbl.text("project_title", 128).unique().notNullable()
        tbl.text("description", 128)
        tbl.boolean("completed")
        .defaultTo(false)
    })

    .createTable("resources", (tbl) => {
        tbl.increments("id")
        tbl.text("resource_title").unique().notNullable()
        tbl.text("description")
        tbl.text("project_assignment").notNullable()
        .references("project_title")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })

    .createTable("tasks", (tbl) => {
        tbl.increments("id")
        tbl.integer("project_id")
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .unsigned()
        .notNullable()
        tbl.text("description").notNullable()
        tbl.text("notes")
        tbl.boolean("completed")
        .defaultTo(false)
    })

}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
}// make sure to add these "backwards/reverse"