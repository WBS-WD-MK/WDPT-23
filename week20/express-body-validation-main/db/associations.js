import sequelize from './index.js';
import Post from '../models/Post.js';
import User from '../models/User.js';

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: 'userId'
  }
});
Post.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' }, onDelete: 'CASCADE' });

sequelize.sync();
