import express from "express";
import UserController from "../controllers/userController";
const router = express.Router();

router.post("/create_user", UserController.createUser);
router.get("/get_users", UserController.getUsers);
router.get("/get_user/:id", UserController.getUserById);
router.get("/check_exist_user/:name", UserController.checkExistUser);
router.patch("/update_user/:id", UserController.updateUser);
router.delete("/delete_user/:id", UserController.deleteUser);
router.delete("/delete_all/:name", UserController.deleteAll);

export default router;
 