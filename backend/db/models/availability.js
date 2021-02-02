'use strict';
module.exports = (sequelize, DataTypes) => {
  const Availability = sequelize.define('Availability', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availability: {
      type: DataTypes.RANGE(DataTypes.DATEONLY),
      allowNull: false,
    },
  }, {
    indexes: [
      {
        fields: ['availability'],
        using: 'gist',
        // operator: '',
      },
    ]
  });
  Availability.associate = function (models) {
    Availability.belongsTo( models.Listing, { foreignKey: "listingId" });
  };
  return Availability;
};