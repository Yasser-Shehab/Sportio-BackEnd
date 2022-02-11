const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product must have a title"],
    maxlength: 30,
  },
  price: {
    type: Number,
    required: [true, "Price is require"],
    default: 0,
  },
  discription: {
    type: String,
    maxlength: 200,
  },
  image: {
    type: String,
    default: "/uploads/example.jpg",
  },
  inStock: {
    type: Number,
    defualt: 0,
  },
  discount: {
    type: Number,
    default: 0,
    max: 100,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});
module.exports = mongoose.model("Product", productSchema);
