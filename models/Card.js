const {DataTypes, Sequelize} = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './cards.db'
  });
const Card = sequelize.define('Card', {
    card_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    point: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false})

module.exports = Card