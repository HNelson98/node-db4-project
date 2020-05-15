
exports.up = function (knex) {
    return knex.schema
        .createTable('recipies', recipies => {
            recipies.increments();

            recipies.string('RecipeName', 255).notNullable();
        })

        .createTable('ingredients', ingredients => {
            ingredients.increments();

            ingredients.string('ingredient', 255).notNullable();
        })


        .createTable('instructions', instructions => {
            instructions.increments();

            instructions
                .integer('recipie_id')
                .unsigned()
                .notNullable()
                .references('recipies.id');

            instructions
                .integer('step_number');

            instructions
                .string('Details', 255);
        })



        .createTable('recipies_ingredients', recipies_ingredients => {
            recipies_ingredients.increments();

            recipies_ingredients.string('quantity');

            recipies_ingredients.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient.id')

            recipies_ingredients.integer('recipie_id')
                .unsigned()
                .notNullable()
                .references('recipie.id')

        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipies_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipies')
};
