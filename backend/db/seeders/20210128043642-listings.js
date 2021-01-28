'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Listings', [
      {
      hostId: 1,
      content: "Beautiful Airstream RV :)",
      dailyPrice: 40,
      city: "Charlotte",
      state: "NC",
      zipcode: 28216
      },
      {
        hostId: 2,
        content: "Beautiful Airstream near Disney!!! :)",
        dailyPrice: 650,
        city: "Orlando",
        state: "FL",
        zipcode: 32882
      },
      {
        hostId: 3,
        content: "Beautiful Tiffin RV :)",
        dailyPrice: 400,
        city: "Charlotte",
        state: "NC",
        zipcode: 28216
      },
      {
        hostId: 1,
        content: "Lakeside Coleman Travel Trailer <3",
        dailyPrice: 200,
        city: "Lake Mary",
        state: "FL",
        zipcode: 32773
      },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
