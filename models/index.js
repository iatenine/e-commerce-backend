// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Category.hasOne(ProductTag);
ProductTag.belongsTo(Category);

// // Categories have many Products
Category.hasMany(Product);
Product.belongsTo(Category);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: "tag_id" });
Tag.belongsToMany(Product, { through: "product_id" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
