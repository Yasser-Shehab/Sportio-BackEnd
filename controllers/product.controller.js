const Product = require("../models/Product");
const path = require("path");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).send(product);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOne({ _id: req.params.id });
    if (!deletedProduct) {
      return res.status(404).send("This Product already deleted");
    }
    await deletedProduct.remove();
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const uploadImage = async (req, res) => {
  const { name } = req.files.image;
  const imagePath = path.join(__dirname, `../public/uploads/${name}`);
  console.log(imagePath);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  addProduct,
  uploadImage,
};
