// Module-17-Lattice/server/src/seeds/user-seeds.ts

import bcrypt from 'bcrypt';

export const users = await Promise.all([
  {
    username: "WhimsyWoods",
    email: "alexis.246.menendez@gmail.com",
    password: "test123",
    isDev: true,
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMama",
    email: "mycomama@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "SporeLore",
    email: "sporelore@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "CapCollector",
    email: "capcollector@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "SporeSprite",
    email: "sporesprite@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "MycoMuse",
    email: "mycomuse@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "MossyMinds",
    email: "mossyminds@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "GillsAndThrills",
    email: "gillsandthrills@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "FungalFriend",
    email: "fungalfriend@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "ShroomBloom",
    email: "shroombloom@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
    username: "LichenLover",
    email: "lichenlover@latticefungi.com",
    password: "test123",
    isDev: false,
    thoughts: [],
    friends: []
  },
  {
      username: "ForagerFox",
      email: "foragerfox@latticefungi.com",
      password: "test123",
      isDev: false,
      thoughts: [],
      friends: []
    },
    {
      username: "HiddenHyphae",
      email: "hiddenhyphae@latticefungi.com",
      password: "test123",
      isDev: false,
      thoughts: [],
      friends: []
    },
    {
      username: "TruffleTroubadour",
      email: "truffletroubadour@latticefungi.com",
      password: "test123",
      isDev: false,
      thoughts: [],
      friends: []
    },
    {
      username: "PuffballPal",
      email: "puffballpal@latticefungi.com",
      password: "test123",
      isDev: false,
      thoughts: [],
      friends: []
    }
    
// Async function to hash passwords and return the result
  ].map(async (user) => ({
    ...user,
    password: await bcrypt.hash(user.password, 10)
  })));