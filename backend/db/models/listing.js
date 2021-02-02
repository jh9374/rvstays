'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    hostId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content:{ 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrls:{ 
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    dailyPrice:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    state:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: 'hostId' });
    Listing.hasMany( models.Booking, { foreignKey: "listingId", onDelete: 'CASCADE', hooks: true });
    Listing.hasMany(models.Review, { foreignKey: "toListingId", onDelete: 'CASCADE', hooks: true });
    Listing.hasMany(models.Availability, { foreignKey: "listingId", onDelete: 'CASCADE', hooks: true });
  };
  return Listing;
};