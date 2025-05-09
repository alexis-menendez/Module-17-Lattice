// client/src/interfaces/ThoughtData.ts

export interface ThoughtData {
  id: string | null;
  thoughtText: string | null;
  username: string | null;
  createdAt: string | null;
  reactionCount: number | null;
  visibility: string | null;
  reactions: Array<Record<string, unknown>> | null;
}

const defaultThoughtData: ThoughtData = {
  id: null,
  thoughtText: null,
  username: null,
  createdAt: null,
  reactionCount: null,
  visibility: null,
  reactions: null,
};

export default defaultThoughtData;
