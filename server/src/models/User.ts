// Module-17-Lattice/server/src/models/User.ts

import { Schema, model, Document, Types, Model } from 'mongoose';

// Plain user fields
export interface IUser {
  username: string;
  email: string;
  password: string;
  bio?: string;
  profilePhoto?: string;
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
  following: Types.ObjectId[];
  followers: Types.ObjectId[]; 
  isDev?: boolean;
}

// Mongoose document with full methods
export interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    isDev: {
      type: Boolean,
      default: false
    },
    bio: {
      type: String,
      maxlength: 160,
    },
    profilePhoto: {
      type: String,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        ret._id = ret._id.toString(); // Ensure _id is a string
        delete ret.password;          // Hide password
      },
    },
    id: false,
  }
);

// Virtuals must use UserDocument
// friendCount
userSchema.virtual('friendCount').get(function (this: UserDocument) {
  return this.friends.length;
});

// followersCount
userSchema.virtual('followersCount').get(function (this: UserDocument) {
  return this.followers.length;
});

// followingCount
userSchema.virtual('followingCount').get(function (this: UserDocument) {
  return this.following.length;
});

// Model should be based on UserDocument
const User = model<UserDocument, Model<UserDocument>>('User', userSchema);

export default User;