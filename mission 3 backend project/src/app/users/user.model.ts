import mongoose, { Schema } from 'mongoose';
import {
  IUser,
  IUserMethods,
  UserDocument,
  UserModelType,
} from './user.interface';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

const userSchema = new Schema<IUser, UserModelType, IUserMethods>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  { timestamps: true }
);

userSchema.pre<UserDocument>('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(
    this.password,
    Number(process.env.SALT_ROUNDS)
  );
  next();
});

userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function (): string {
  return jwt.sign(
    {
      id: this._id?.toString(),
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    { expiresIn: '30m' }
  );
};

userSchema.methods.generateRefreshToken = function (): string {
  return jwt.sign(
    {
      id: this._id?.toString(),
      role: this.role,
    },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    { expiresIn: '7d' }
  );
};

export const User = mongoose.model<IUser, UserModelType>('User', userSchema);
