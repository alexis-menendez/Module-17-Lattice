// Module-17-Lattice/server/src/seeds/user-seeds.ts

import bcrypt from 'bcrypt';

const defaultProfilePhoto = 'https://res.cloudinary.com/demo/image/upload/v1714430000/default-profile.png'; // Replace with your own

export const users = await Promise.all([
  {
    username: "WhimsyWoods",
    email: "alexis.246.menendez@gmail.com",
    password: "test123",
    isDev: true,
    bio: "Explorer of mind and mycelium.",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMama",
    email: "mycomama@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "SporeLore",
    email: "sporelore@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "CapCollector",
    email: "capcollector@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "SporeSprite",
    email: "sporesprite@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMuse",
    email: "mycomuse@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "MossyMinds",
    email: "mossyminds@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "GillsAndThrills",
    email: "gillsandthrills@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "FungalFriend",
    email: "fungalfriend@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "ShroomBloom",
    email: "shroombloom@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "LichenLover",
    email: "lichenlover@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "ForagerFox",
    email: "foragerfox@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "HiddenHyphae",
    email: "hiddenhyphae@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "TruffleTroubadour",
    email: "truffletroubadour@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  },
  {
    username: "PuffballPal",
    email: "puffballpal@latticefungi.com",
    password: "test123",
    isDev: false,
    bio: "",
    profilePhoto: "https://res.cloudinary.com/lattice-image-storage/image/upload/v1746027866/default-profile_zsz7v2.png",
    following: [],
    thoughts: [],
    friends: []
  }
].map(async (user) => ({
  ...user,
  password: await bcrypt.hash(user.password, 10)
})));
