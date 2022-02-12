const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.body.id });
    res.status(200).send(order);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getUserOrders = (req, res) => {
  try {
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: req.body.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findOne({ _id: req.body.id });
    if (!deletedOrder) {
      return res.status(404).send("This Order has been removed");
    }
    await deletedOrder.remove();
    res.status(200).send("Order cancelled");
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
