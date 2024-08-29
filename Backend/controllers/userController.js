const { createUser, getUsers, deleteUser } = require("../services/userService");

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to add user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
};
