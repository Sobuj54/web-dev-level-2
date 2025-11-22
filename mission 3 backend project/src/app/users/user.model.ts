import mongoose, { Schema } from 'mongoose';
import { IUser, UserModelType } from './user.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser, UserModelType>(
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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(
    this.password,
    Number(process.env.SALT_ROUNDS)
  );
  next();
});

export const User = mongoose.model<IUser, UserModelType>('User', userSchema);
