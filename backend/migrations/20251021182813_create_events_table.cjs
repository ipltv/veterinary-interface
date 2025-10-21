// backend/migrations/20251021182813_create_events_table.cjs
// Migration to create the "events" table
exports.up = async function(knex) {
  await knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.integer("animal_id").notNullable().references("id").inTable("animals").onDelete("CASCADE");
    table.string("type").notNullable();
    table.string("description").notNullable();
    table.timestamp("event_date").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("events");    
};
