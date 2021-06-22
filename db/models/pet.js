'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    static associate(models) {
      pet.belongsTo(models.usuario, {
        foreignKey: 'pet_id'
      })

    }
  };
  pet.init({
    nome: DataTypes.STRING,
    data: DataTypes.DATE,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};