
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    //ID
    tbl.increments('id');
    //The critical information for each car is the VIN, make, model, and mileage.
    tbl.string('VIN', 17).notNull().unique();
    tbl.string('Make', 256).notNull();
    tbl.string('Model', 256).notNull();
    tbl.integer('Milage', 256).notNull();
    //They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
    tbl.string('Transmission', 256);
    tbl.string('Title', 256);
    //Time
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
