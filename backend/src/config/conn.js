import Sequelize from "sequelize"

const conn = new Sequelize('projetoIntergrador', 'root', 'X@vier#Layla29*', {
    host: 'localhost',
    dialect: 'mysql' 
  });


export default conn;