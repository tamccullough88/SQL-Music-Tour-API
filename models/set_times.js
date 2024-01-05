'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      //band
      set_times.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'bands'
      })

      //event
      set_times.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'events'
      })

      //stage
      set_times.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stages'
      })
    }
  }
  set_times.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'set_times',
    tableName: 'set_times',
    timestamps: false
  });
  return set_times;
};