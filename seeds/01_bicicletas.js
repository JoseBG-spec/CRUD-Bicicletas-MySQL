/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('bicicletas').del()
    .then(function () {
      return knex('bicicletas').insert([
        { id: '1', color: 'rojo',modelo: 'bmx', lat: 19.284770943610578, lon: -99.13729060406136 },
        { id: '2', color: 'blanca',modelo: 'Benotto', lat: 19.284770943610578, lon: -99.13729060406136 }
      ]);
    });
};
