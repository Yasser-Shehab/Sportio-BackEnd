const express = require("express");
const {
  getAllOrders,
  getSingleOrder,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/oreder.controller");

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getSingleOrder);
router.get("/myorders", getUserOrders);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
