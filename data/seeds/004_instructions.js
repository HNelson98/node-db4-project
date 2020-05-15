
exports.seed = function (knex) {

  // Inserts seed entries
  return knex('instructions').insert([
    { 
      recipie_id: 1,
      step_number: 1,
      Details: 'A Spoon Full of Sugar'
      
    },
    { 
      recipie_id: 1,
      step_number: 2,
      Details: 'helps the medacine go down'
      
    },
    { 
      recipie_id: 1,
      step_number: 3,
      Details: 'THe Medacine go Dowwwn'
      
    },
    { 
      recipie_id: 2,
      step_number: 1,
      Details: 'The Medacine go down'
      
    },
    { 
      recipie_id: 2,
      step_number: 2,
      Details: 'Oh A Spoon Full of Sugar'
      
    },
    { 
      recipie_id: 2,
      step_number: 3,
      Details: 'helps the medacine go down!'
      
    },
    { 
      recipie_id: 3,
      step_number: 1,
      Details: 'In the most'
      
    },
    { 
      recipie_id: 3,
      step_number: 2,
      Details: 'deliiightful way.'
      
    },
  ]);

};
