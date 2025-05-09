// client/src/interfaces/UserData.ts

export interface UserData {
  id: string | null;
  username: string | null;
  email: string | null;
  bio: string | null;
  profilePhoto: string | null;
}

const defaultUserData: UserData = {
  id: null,
  username: null,
  email: null,
  bio: null,
  profilePhoto: null,
};

export default defaultUserData;
