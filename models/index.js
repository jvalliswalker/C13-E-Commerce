// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag)
ProductTag.belongsTo(Product)
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(ProductTag);
ProductTag.belongsTo(Tag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
