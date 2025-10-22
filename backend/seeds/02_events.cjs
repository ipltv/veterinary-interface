// backend/seeds/02_events.cjs
// Seeds for the "events" table

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("events").del();

  // Inserts seed entries
  await knex("events").insert([
    {
      id: 1,
      animal_id: 1,
      type: "Visit",
      description: "Annual health check and vaccination.",
      event_date: "2024-06-10",
    },
    {
      id: 2,
      animal_id: 1,
      type: "Treatment",
      description: "Flea and tick prevention treatment.",
      event_date: "2024-07-05",
    },
    {
      id: 3,
      animal_id: 2,
      type: "Observation",
      description: "Loss of appetite observed.",
      event_date: "2024-08-20",
    },
    {
      id: 4,
      animal_id: 3,
      type: "Visit",
      description: "Routine dental checkup.",
      event_date: "2024-09-14",
    },
  ]);
};
