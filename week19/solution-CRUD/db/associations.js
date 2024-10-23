import User from '../models/User.js';
import Note from '../models/Note.js';
import sequelize from './index.js';
User.hasMany(Note, { onDelete: 'CASCADE' });
Note.belongsTo(User);

sequelize.sync();
