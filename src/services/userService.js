import User from "../model/Users.js";
// create user
const createUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    console.log(error);
  }
};
// get all users
const getUsers = async () => {
  try {
    return await User.find().lean();
  } catch (error) {
    console.log(error);
  }
};
// get user by id
const getUserById = async (id) => {
  try {
    // lean() dung de chuyen doi document tra ve tu mongoose sang object javascript
    const user = await User.findById(id).lean();
    return user;
  } catch (error) {
    console.log(error);
  }
};
// kiem tra document co ton tai khong va update document do
const updateUser = async (id, user) => {
  try {
    return await User.findByIdAndUpdate(id, user, { new: true });
  } catch (error) {
    console.log(error);
  }
};
// kieu tra document co ton tai khong va xoa document do
const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
/// delete all user 
// deleteOne dung de xoa 1 document dau tien tim thay
const deleteAll = async (name) => {
  try {
    return await User.deleteMany(name);
  } catch (error) {
    console.log(error);
  }
};
// check exist user kiem tra su ton tai cua document
const checkExistUser = async (name) => {
  try {
    // gia tri tra ve la true hoac false
    return await User.exists({ name });
  } catch (error) {
    console.log(error);
  }
};
export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteAll,
  checkExistUser,
};
