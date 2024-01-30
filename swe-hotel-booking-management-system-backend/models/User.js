// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("userData", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
    // Field must be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
    validate: {
      len: [6, 100], // Password length must be between 6 and 100 characters
    },
  },
});


module.exports = User;
