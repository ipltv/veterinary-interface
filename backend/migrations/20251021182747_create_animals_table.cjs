
// backend/migrations/20251021182747_create_animals_table.cjs
// Migration to create the "animals" table

exports.up = async function (knex) {
    await knex.schema.createTable("animals", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("species").notNullable();
        table.date("birth_date");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("animals");
};
