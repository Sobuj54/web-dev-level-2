import { Router } from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controllers";

const router = Router();

router.route("/create").post(createUser);
router.route("/").get(getUsers);
router.route("/user/:id").get(getUserById);
router.route("/admins").get(getAdminUsers);

export default router;
