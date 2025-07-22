import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import User from "./user.model";
import { Iuser } from "./user.interface";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const data: Iuser = req.body;

  const user = await User.create(data);

  return res.json(user);
});

const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  return res.status(200).json(users);
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findOne({ id: id }, { name: 1 });

  return res.status(200).json(user);
});

const getAdminUsers = asyncHandler(async (req: Request, res: Response) => {
  const admins = await User.getAdminUsers();
  return res.status(200).json({ admins: admins });
});

export { createUser, getUsers, getUserById, getAdminUsers };
