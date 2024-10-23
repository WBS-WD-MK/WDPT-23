import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Note = sequelize.define('note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Note;
