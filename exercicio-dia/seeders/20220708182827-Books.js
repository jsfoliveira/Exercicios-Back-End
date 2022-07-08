'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
       title: 'Bela adormecida',
       author: 'João',
       pageQuantity: 30,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: 7133840947,
      },
      {
        title: 'Homem aranha',
        author: 'Maria',
        pageQuantity: 60,
         createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
         updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
         phone_num: 7133840947,
       },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};