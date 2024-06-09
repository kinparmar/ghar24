'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init({
    propertyid: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    bedRooms: DataTypes.INTEGER,
    bathRooms: DataTypes.INTEGER,
    sqFeet: DataTypes.DOUBLE,
    garages: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    moreImagesUrl_1: DataTypes.STRING,
    moreImagesUrl_2: DataTypes.STRING,
    isFav: DataTypes.BOOLEAN,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};