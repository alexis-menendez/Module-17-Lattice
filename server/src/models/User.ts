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
      maxlength: 160, //160 character limit for bio
    },
    profilePhoto: {
      type: String,   // URL to profile photo
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtuals must use UserDocument
userSchema.virtual('friendCount').get(function (this: UserDocument) {
  return this.friends.length;
});

// Model should be based on UserDocument
const User = model<UserDocument, Model<UserDocument>>('User', userSchema);

export default User;
