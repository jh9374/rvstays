'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        toUserId: 1,
        fromUserId: 2,
        content: "Is the Airstream available?"
      },
      {
        toUserId: 2,
        fromUserId: 2,
        content: "Is the Airstream available?"
      },
      {
        toUserId: 3,
        fromUserId: 1,
        content: "Is the Tiffin available? And how long is it?"
      },
      {
        toUserId: 2,
        fromUserId: 1,
        content: "Is the Coleman available the first week of October? And are there a lot of crocs near?"
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {});

  }
};
