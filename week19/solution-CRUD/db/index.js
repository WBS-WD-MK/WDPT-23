// Import the Sequelize class from the library
import { Sequelize } from 'sequelize';
// Create a new instance of Sequelize with the connection string
const sequelize = new Sequelize(process.env.PG_URI);
// Export the instance so we can use it in other files
export default sequelize;
