// Module-17-Lattice/client/src/interfaces/UserData.jsx

/**
 * @typedef {Object} UserData
 * @property {string|null} id - The user's ID
 * @property {string|null} username - The user's username
 * @property {string|null} email - The user's email (optional for logged-in user)
 * @property {string|null} bio - The user's bio (up to 160 characters)
 * @property {string|null} profilePhoto - URL to the user's profile photo
 */

/** @type {UserData} */
const defaultUserData = {
  id: null,
  username: null,
  email: null,
  bio: null,
  profilePhoto: null
};

export default defaultUserData;
