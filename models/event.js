'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, StageEvent, MeetGreet, set_times }) {

      //stage
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: StageEvent
      })

      //meet greet
      Event.hasMany(MeetGreet, {
        foreignKey: 'event_id',
        as: 'meet_greets'
      })

      // set times
      Event.hasMany(set_times, {
        foreignKey: 'event_id',
        as: 'set_times'
      })
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_location: {
      type: DataTypes.STRING,
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
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  })
  return Event
}