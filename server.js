const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const { Category, Product, ProductTag, Tag } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await Category.sync({ force: false });
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

// sync sequelize models to the database, then turn on the server
init();
