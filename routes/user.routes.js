const express = require("express");
const authenticated = require("../middlewares/authentication");
const authorized = require("../middlewares/authorization");
const {
  getAllUsers,
  register,
  login,
  profile,
  logout,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", authenticated, authorized, getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authenticated, profile);
router.get("/logout", authenticated, logout);

module.exports = router;
