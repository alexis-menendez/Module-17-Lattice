import { Thought } from '../models/Thought.js';

export const seedThoughts = async () => {
  await Thought.insertMany([
    {
      thoughtText: "Found a patch of Indigo Milk Caps during my hike today!",
      username: "SporeSprite",
      createdAt: new Date("2025-04-12T10:00:00Z"),
      reactions: [
        {
          reactionBody: "No way, they're so rare!",
          username: "MycoMuse",
          createdAt: new Date("2025-04-12T10:30:00Z"),
        },
      ],
    },
    {
      thoughtText: "Lion’s Mane finally fruiting indoors — so satisfying!",
      username: "TruffleTroubadour",
      createdAt: new Date("2025-04-12T11:00:00Z"),
      reactions: [
        {
          reactionBody: "Teach me your ways!",
          username: "ShroomBloom",
          createdAt: new Date("2025-04-12T11:15:00Z"),
        },
      ],
    },
    {
      thoughtText: "Does anyone else name their mushrooms, or is it just me?",
      username: "GillsAndThrills",
      createdAt: new Date("2025-04-13T09:45:00Z"),
      reactions: [
        {
          reactionBody: "100% normal behavior.",
          username: "PuffballPal",
          createdAt: new Date("2025-04-13T10:00:00Z"),
        },
      ],
    },
    {
      thoughtText: "Spore prints coming out beautifully this season!",
      username: "LichenLover",
      createdAt: new Date("2025-04-14T12:30:00Z"),
      reactions: [
        {
          reactionBody: "Post pics please!",
          username: "MossyMinds",
          createdAt: new Date("2025-04-14T12:45:00Z"),
        },
      ],
    }
  ]);
};
