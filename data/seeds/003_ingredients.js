
exports.seed = function (knex) {

  // Inserts seed entries
  return knex('ingredients').insert([
    {ingredient: 'butter' },
    {ingredient: 'Spoonful of Suger' },
    {ingredient: 'chocolate chips' },
    {ingredient: 'eggs' },
    {ingredient: 'flours' },

  ]);

};
