// client/src/interfaces/UserLogin.ts

export interface UserLogin {
  username: string | null;
  password: string | null;
}

const defaultUserLogin: UserLogin = {
  username: null,
  password: null,
};

export default defaultUserLogin;
