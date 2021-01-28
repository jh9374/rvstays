'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    toUserId: {
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
  Message.associate = function(models) {
    Message.belongsTo( models.User, { foreignKey: "toUserId" });
    Message.belongsTo( models.User, { foreignKey: "fromUserId" });
  };
  return Message;
};