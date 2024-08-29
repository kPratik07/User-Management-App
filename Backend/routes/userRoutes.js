const express = require("express");
const {
  getUsers,
  addUser,
  deleteUser,
} = require("../controllers/userController");
const { validateUser } = require("../utils/validation");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", validateUser, addUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
