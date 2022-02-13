const express = require("express");
const authenticated = require("../middlewares/authentication");
const authorized = require("../middlewares/authorization");
const {
  getAllCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getSingleCategory);
router.post("/", authenticated, authorized, addCategory);
router.patch("/:id", authenticated, authorized, updateCategory);
router.delete("/:id", authenticated, authorized, deleteCategory);

module.exports = router;
