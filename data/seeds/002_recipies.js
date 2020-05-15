
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipies').insert([
    {RecipeName: 'Chocolate Chip Coookies' },
    {RecipeName: 'Cinnamon Brownies' },
    { RecipeName: 'Bread' }
  ]);
};
