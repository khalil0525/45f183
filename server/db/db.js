const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/messenger",
  {
    logging: false,
  }
);
//PARAMETERS FOR GITHUB PULL REQUEST
// process.env.DATABASE_URL || "postgres://localhost:5432/messenger",
// {
//   logging: false,
// }
//PARAMETERS FOR LOCAL MACHINE
// "messenger", "postgres", "gggabc123", {
//   host: "localhost",
//   dialect: "postgres",
// }

module.exports = db;
