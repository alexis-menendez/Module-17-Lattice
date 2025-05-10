// client/src/interfaces/UserData.ts

// Main user profile (for logged-in user)
// How to import in other files: import { UserData, defaultUserData } from '../../interfaces/UserData';
export interface UserData {
  _id: string;
  username: string;
  email: string;
  bio: string;
  profilePhoto: string;

  // Friends
  friendCount: number;
  friendList: string[]; // usernames of friends

  // Following
  followingCount: number;
  followingList: string[]; // usernames of people this user follows

  // Followers
  followersCount: number;
  followersList: string[]; // usernames of people who follow this user
}

export const defaultUserData: UserData = {
  _id: '',
  username: '',
  email: '',
  bio: '',
  profilePhoto: '',

  friendCount: 0,
  friendList: [],

  followingCount: 0,
  followingList: [],

  followersCount: 0,
  followersList: [],
};

// Friend profile (for friend lists)
// How to import in other files: import { FriendProfile, defaultFriendProfile } from '../../interfaces/UserData';
export interface FriendProfile {
  _id: string;
  username: string;
  profilePhoto: string;
  bio: string;

  // Friends
  friendCount: number;

  // Following
  followingCount: number;

  // Followers
  followersCount: number;
}

export const defaultFriendProfile: FriendProfile = {
  _id: '',
  username: '',
  profilePhoto: '',
  bio: '',

  friendCount: 0,

  followingCount: 0,

  followersCount: 0,
};

export default defaultUserData;
