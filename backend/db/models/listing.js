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
    Listing.belongsTo( models.User, { foreignKey: 'id'});
    Listing.hasMany( models.Booking, { foreignKey: "listingId" });
    Listing.hasMany( models.Review, { foreignKey: "toListingId" });
  };
  return Listing;
};