import {Sequelize} from "sequelize";

const db = new Sequelize('exc5', 'root', '', {
    host: '34.71.5.249',
    dialect: 'mysql'
});

export default db;