const express = require("express");
const authenticated = require("../middlewares/authentication");
const authorized = require("../middlewares/authorization");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/product.controller");

router.get("/", getAllProducts);

router.get("/:id", getSingleProduct);

router.post("/uploadImage", uploadImage);
router.post("/", authenticated, authorized, addProduct);

router.patch("/:id", authenticated, authorized, updateProduct);

router.delete("/:id", authenticated, authorized, deleteProduct);

module.exports = router;
