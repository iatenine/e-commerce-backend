// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Category.hasOne(ProductTag);
ProductTag.belongsTo(Category);

// // Categories have many Products
Category.hasMany(Product, {
  onDelete: "Cascade",
});
Product.belongsTo(Category, {
  onDelete: "Cascade",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: "ProductTag" });
Tag.belongsToMany(Product, { through: "ProductTag" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
