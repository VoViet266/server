import User from "../model/Users.js";

const createUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (id, user) => {
  try {
    return await User.findByIdAndUpdate(id, user, { new: true });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
export default { createUser, getUsers, getUserById, updateUser, deleteUser };
