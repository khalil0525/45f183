const Sequelize = require("sequelize");

const db = new Sequelize("messenger", "postgres", "gggabc123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
