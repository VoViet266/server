import Service from "../services/userService.js";
const CreateUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await Service.createUser(user);
    console.log(`Da tao user ${newUser}`);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await Service.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Service.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const updatedUser = await Service.updateUser(id, user);
    console.log(`Da update user ${updatedUser}`);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await Service.deleteUser(id);
    console.log(`Da xoa user ${deletedUser}`);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default {
  createUser: CreateUser,
  getUsers: getUsers,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
