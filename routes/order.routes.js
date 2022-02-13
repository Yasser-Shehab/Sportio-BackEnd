const express = require("express");
const authenticated = require("../middlewares/authentication");
const authorized = require("../middlewares/authorization");
const {
  getAllOrders,
  getSingleOrder,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

const router = express.Router();

router.get("/", authenticated, authorized, getAllOrders);
router.get("/:id", authenticated, authorized, getSingleOrder);
router.get("/myorders", authenticated, getUserOrders);
router.post("/", authenticated, createOrder);
router.patch("/:id", authenticated, authorized, updateOrder);
router.delete("/:id", authenticated, authorized, deleteOrder);

module.exports = router;
