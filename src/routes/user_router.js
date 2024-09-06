import express from "express";
import UserController from "../controllers/userController";
const router = express.Router();

router.post("/create_user", UserController.createUser);
router.get("/get_users", UserController.getUsers);
router.get("/get_user/:id", UserController.getUserById);
router.patch("/update_user/:id", UserController.updateUser);
router.delete("/delete_user/:id", UserController.deleteUser);

export default router;
 