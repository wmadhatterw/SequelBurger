

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      //must enter customer
      allowNull: false
    }
  });
  return Customer;
};
