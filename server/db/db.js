const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "messenger",
  "postgres",
  "gggabc123",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = db;
