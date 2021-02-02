'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookings: {
      type: DataTypes.RANGE(DataTypes.DATEONLY),
      allowNull: false,
    },
    bookerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      indexes: [
        {
          fields: ['availability'],
          using: 'gist',
          // operator: '',
        },
      ]
  });
  Booking.associate = function(models) {
    Booking.belongsTo( models.User, { foreignKey: "bookerId" });
    Booking.belongsTo( models.Listing, { foreignKey: "listingId" });
  };
  return Booking;
};