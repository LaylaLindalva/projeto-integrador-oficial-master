import Sequelize from "sequelize"

const conn = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' 
  });


export default conn;