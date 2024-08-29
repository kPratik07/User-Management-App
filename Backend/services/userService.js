const User = require("../models/userModel");

const createUser = async (userData) => {
  const { firstName, lastName, email, password } = userData;
  const newUser = new User({ firstName, lastName, email, password });
  return await newUser.save();
};

const getUsers = async () => {
  return await User.find({ deleted: false });
};

const deleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { deleted: true });
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
