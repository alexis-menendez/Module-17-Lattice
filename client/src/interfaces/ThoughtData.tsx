// client/src/interfaces/ThoughtData.ts

export interface Reaction {
  _id: string;
  reactionBody: string;
  username: string;
  createdAt: string;
}

export interface Thought {
  _id: string;
  thoughtText: string;
  username: string;
  createdAt: string;
  reactionCount: number;
  visibility: string;
  reactions: Reaction[];
}

// Fallback state values
export const defaultThought: Thought = {
  _id: '',
  thoughtText: '',
  username: '',
  createdAt: '',
  reactionCount: 0,
  visibility: 'public',
  reactions: [],
};
