'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        listingId: 5,
        openings: new Date('2021-12-23'),
        bookerId: 2,
      },
      {
        listingId: 6,
        openings: new Date('2021-02-19'),
        bookerId: 1,
      },
      {
        listingId: 7,
        openings: new Date('2021-05-03'),
        bookerId: 1,
      },
      {
        listingId: 8,
        openings: new Date('2021-08-21'),
        bookerId: 3,
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
