import { HydratedDocument, Model } from "mongoose";

export interface Iuser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  emegergencyContact: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IuserMethods {
  fullName(): string;
}

export interface UserModel extends Model<Iuser, {}, IuserMethods> {
  getAdminUsers(): Promise<HydratedDocument<Iuser, IuserMethods>>;
}
