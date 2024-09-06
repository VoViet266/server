import Service from "../services/userService.js";
// create user
const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await Service.createUser(user);
    console.log(`Da tao user ${newUser}`);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get all users
const getUsers = async (req, res) => {
  try {
    const users = await Service.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get user by id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Service.getUserById(id);
   
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// update user by id
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
// delete user by id
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
// delete all user by name
const deleteAll = async (req, res) => {
  try {
    const name = req.params.name 
    
    const deletedUsers = await Service.deleteAll({name});
    console.log(`Da xoa tat ca user ${deletedUsers}`);
    res.status(200).json(deletedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const checkExistUser = async (req, res) => {
  try {
    const name = req.params.name;
    const checkExist = await Service.checkExistUser(name);
    if (checkExist) {
      res.status(200).json({ message: "User da ton tai" });
    } else {
      res.status(404).json({ message: "User khong ton tai" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default {
  createUser: createUser,
  getUsers: getUsers,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser,
  deleteAll: deleteAll,
  checkExistUser: checkExistUser,
};
