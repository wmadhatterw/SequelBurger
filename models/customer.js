

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      allowNull: false//must enter customer
    }
  });
  return Customer;
};
