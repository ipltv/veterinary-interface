// backend/seeds/01_animals.cjs
// Seeds for the "animals" table

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("animals").del();

  // Inserts seed entries
  await knex("animals").insert([
    {
      id: 1,
      name: "Bella",
      species: "Dog",
      birth_date: "2018-05-12",
    },
    {
      id: 2,
      name: "Milo",
      species: "Cat",
      birth_date: "2019-09-01",
    },
    {
      id: 3,
      name: "Luna",
      species: "Rabbit",
      birth_date: "2021-02-17",
    },
  ]);
};
