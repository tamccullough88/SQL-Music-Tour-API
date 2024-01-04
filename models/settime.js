'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      //event
      SetTime.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      //stage
      SetTime.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })


    }
  };
  SetTime.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  })
  return SetTime
}