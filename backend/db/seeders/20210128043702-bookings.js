'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        listingId: 1,
        openings: '[2021-12-23, 2021-12-27)',
        bookerId: 2,
      },
      {
        listingId: 2,
        openings: '[2021-02-19, 2021-02-28)',
        bookerId: 1,
      },
      {
        listingId: 3,
        openings: '[2021-05-03, 2021-05-15)',
        bookerId: 1,
      },
      {
        listingId: 4,
        openings: '[2021-08-21, 2021-09-21)',
        bookerId: 3,
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
