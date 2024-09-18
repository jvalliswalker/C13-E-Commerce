const express = require("express");
const routes = require("./routes");
const sequelize = require("sequelize");

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add routers
app.use(routes);

// Sync sequelize and begin server listening 
sequelize.sync({ force: false }).then(() =>
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
);
