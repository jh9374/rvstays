'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookings: {
      type: DataTypes.DATERANGE(DataTypes.DATEONLY),
      allowNull: false,
    },
    bookerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo( models.User );
    Booking.belongsTo( models.Listing );
  };
  return Booking;
};