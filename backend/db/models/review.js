'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    toListingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fromUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo( models.User, { foreignKey: "id" });
  };
  return Review;
};