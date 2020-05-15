
exports.seed = function (knex) {

  // Inserts seed entries
  return knex('recipies_ingredients').insert([
    {
      ingredient_id: 1,
      recipie_id: 1,
      quantity: "1 cup"
    },
    {
      ingredient_id: 2,
      recipie_id: 1,
      quantity: "2"
    },
    {
      ingredient_id: 3,
      recipie_id: 1,
      quantity: "13 cups"
    },
    {
      ingredient_id: 4,
      recipie_id: 1,
      quantity: "1 cup"
    },
    {
      ingredient_id: 5,
      recipie_id: 1,
      quantity: "3 cups"
    },


    {
      ingredient_id: 1,
      recipie_id: 2,
      quantity: "WHAT"
    },
    {
      ingredient_id: 2,
      recipie_id: 2,
      quantity: "ARE YOU"
    },
    {
      ingredient_id: 3,
      recipie_id: 2,
      quantity: "DOING"
    },
    {
      ingredient_id: 4,
      recipie_id: 1,
      quantity: "IN MY"
    },
    {
      ingredient_id: 5,
      recipie_id: 2,
      quantity: "SWAMP"
    },

    {
      ingredient_id: 1,
      recipie_id: 3,
      quantity: "Practically Perfect"
    },
    {
      ingredient_id: 2,
      recipie_id: 2,
      quantity: "in"
    },
    
    {
      ingredient_id: 4,
      recipie_id: 1,
      quantity: "every"
    },
    {
      ingredient_id: 5,
      recipie_id: 2,
      quantity: "way"
    },
  ]);

};
