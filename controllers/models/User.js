const {Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class User extends Model {}

User.init({

},{
    sequelize
});

module.exports=User