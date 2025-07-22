import mongoose, { Model, Schema } from "mongoose";
import { Iuser, IuserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<Iuser, UserModel, IuserMethods>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: String,
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: String,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    emegergencyContact: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.method("fullName", function fullName() {
  return `${this.name.firstName} ${this.name.lastName}`;
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
  return await this.find({ role: "admin" });
});

const User = mongoose.model<Iuser, UserModel>("User", userSchema);

export default User;
