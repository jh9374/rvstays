'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        toListingId: 1,
        fromUserId: 2,
        content: 'Truly beautiful RV and wonderful stay',
      },
      {
        toListingId: 2,
        fromUserId: 1,
        content: 'This was a great experience and Disney was a Bonus!!!',
      },
      {
        toListingId: 3,
        fromUserId: 2,
        content: 'RV was ok...',
      },
      {
        toListingId: 2,
        fromUserId: 1,
        content: 'The lake was beautiful, just beware the crocs... 0_0',
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
