'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetDevs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PetDevs.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    tempo: DataTypes.INTEGER,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PetDevs',
  });
  return PetDevs;
};