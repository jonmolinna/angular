import { Sequelize } from "sequelize";

const sequelize = new Sequelize("angular_db", "root", "molina125", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
