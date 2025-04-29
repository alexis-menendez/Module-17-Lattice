// Module-17-Lattice/server/src/seeds/thought-seeds.ts

export const thoughts = [

  {
    thoughtText: "Just spotted a rare Blue Pinkgill while hiking today!",
    username: "MycoMama",
    createdAt: new Date("2025-04-26T10:00:00Z"),
    visibility: "public",
    reactions: [
      {
        reactionBody: "Omg jealous!! Post a pic!",
        username: "SporeLore",
        createdAt: new Date("2025-04-26T10:30:00Z"),
      },
    ],
  },

  {
    thoughtText: "Anyone else having trouble cultivating Lion’s Mane indoors?",
    username: "SporeLore",
    createdAt: new Date("2025-04-26T11:00:00Z"),
    visibility: "public",
    reactions: [
      {
        reactionBody: "Mine hated the humidity at first too. Try adjusting airflow!",
        username: "CapCollector",
        createdAt: new Date("2025-04-26T11:10:00Z"),
      },
    ],
  },

  {
    thoughtText: "Dreaming of a bioluminescent mushroom garden someday.",
    username: "WhimsyWoods",
    createdAt: new Date("2025-04-27T09:00:00Z"),
    visibility: "public",
    reactions: [
      {
        reactionBody: "That would be magical!",
        username: "MycoMuse",
        createdAt: new Date("2025-04-27T09:15:00Z"),
      },
    ],
  },

  {
    thoughtText: "Personal journal: found a hidden grove but keeping it secret for now.",
    username: "WhimsyWoods",
    createdAt: new Date("2025-04-27T10:00:00Z"),
    visibility: "private",
    reactions: [],
  },

  {
    thoughtText: "Started a spore print collection — so many colors!",
    username: "WhimsyWoods",
    createdAt: new Date("2025-04-27T11:00:00Z"),
    visibility: "public",
    reactions: [
      {
        reactionBody: "Show us pictures!",
        username: "SporeLore",
        createdAt: new Date("2025-04-27T11:20:00Z"),
      },
    ],
  },

  {
    thoughtText: "Private notes: testing new substrate blend for better oyster yields.",
    username: "MycoMama",
    createdAt: new Date("2025-04-27T12:00:00Z"),
    visibility: "private",
    reactions: [],
  },

  {
    thoughtText: "Private journal: contemplating starting a mushroom CSA next spring.",
    username: "MycoMama",
    createdAt: new Date("2025-04-27T13:00:00Z"),
    visibility: "private",
    reactions: [],
  }
];
