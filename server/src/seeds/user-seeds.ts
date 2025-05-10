// Module-17-Lattice/server/src/seeds/user-seeds.ts

import bcrypt from 'bcrypt';
import User from '../models/User.js';

const defaultProfilePhoto = 'https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png';

export const users = await Promise.all([
  {
    username: "WhimsyWoods",
    email: "alexis.246.menendez@gmail.com",
    password: "test123",
    isDev: true,
    bio: "Explorer of mind and mycelium.",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMama",
    email: "mycomama@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "SporeLore",
    email: "sporelore@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "CapCollector",
    email: "capcollector@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "SporeSprite",
    email: "sporesprite@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMuse",
    email: "mycomuse@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MossyMinds",
    email: "mossyminds@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "GillsAndThrills",
    email: "gillsandthrills@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "FungalFriend",
    email: "fungalfriend@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "ShroomBloom",
    email: "shroombloom@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "LichenLover",
    email: "lichenlover@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "ForagerFox",
    email: "foragerfox@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "HiddenHyphae",
    email: "hiddenhyphae@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "TruffleTroubadour",
    email: "truffletroubadour@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  },
  {
    username: "PuffballPal",
    email: "puffballpal@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: defaultProfilePhoto,
    following: [],
    followers: [],
    thoughts: [],
    friends: []
  }
  
].map(async (user) => ({
  ...user,
  password: await bcrypt.hash(user.password, 10),
  following: [],  
  followers: [],
  thoughts: [],
  friends: []
  }))
);

// Insert into database and get _id references
const insertedUsers = await User.insertMany(users);

// Create a map for easy reference
const userMap = Object.fromEntries(
  insertedUsers.map((user) => [user.username, user._id])
);

// Update following/followers relationships
const updates = [];

for (const user of insertedUsers as any[]) {
  if (user.username === 'WhimsyWoods') {
    user.following = [
      userMap['MycoMama'],
      userMap['SporeLore'],
    ];
    user.followers = [
      userMap['CapCollector'],
    ];
    updates.push(user.save());
  }

  if (user.username === 'MycoMama') {
    user.followers.push(userMap['WhimsyWoods']);
    updates.push(user.save());
  }

  if (user.username === 'SporeLore') {
    user.followers.push(userMap['WhimsyWoods']);
    updates.push(user.save());
  }

  if (user.username === 'CapCollector') {
    user.following.push(userMap['WhimsyWoods']);
    updates.push(user.save());
  }
}

await Promise.all(updates);