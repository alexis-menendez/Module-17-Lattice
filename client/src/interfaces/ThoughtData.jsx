// Module-17-Lattice/client/src/interfaces/ThoughtData.jsx

/**
 * @typedef {Object} ThoughtData
 * @property {string|null} id - The thought ID
 * @property {string|null} thoughtText - The content of the thought
 * @property {string|null} username - The username of the poster
 * @property {string|null} createdAt - The date the thought was created
 * @property {number|null} reactionCount - Number of reactions the thought has
 */

/** @type {ThoughtData} */
const defaultThoughtData = {
    id: null,
    thoughtText: null,
    username: null,
    createdAt: null,
    reactionCount: null
  };
  
  export default defaultThoughtData;
  