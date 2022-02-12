const User = require("../models/User");
const JWT = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const register = async (req, res) => {
  try {
    const isFirst = (await User.countDocuments({})) === 0;
    const role = isFirst ? "admin" : "user";
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    const matched = await user.comparePassword(password);

    if (!matched) {
      return res.status(401).send("Invalid email or password");
    }
    const userToken = JWT.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    res.status(200).send(userToken);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const profile = async (req, res) => {
  res.send("User data");
};

module.exports = { register, login, profile, getAllUsers };
