import { Schema, model, Document, Types } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
  getFriends: number;
}

const userSchema = new Schema<IUser>(
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
    getFriends: {
      type: Number,
      default: 0,
    },
    thoughts: [{
      type: Schema.Types.ObjectId, ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId, ref: 'User',
    }],
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function (this: IUser) {
    return `${this.friends.length}`;
  })

const User = model('user', userSchema);

export default User;