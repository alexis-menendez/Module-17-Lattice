// Module-17-Lattice/server/src/seeds/thought-seeds.ts

export const thoughts = [
  {
    thoughtText: "Just spotted a rare Blue Pinkgill while hiking today!",
    username: "MycoMama",
    createdAt: new Date("2025-04-26T10:00:00Z"),
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
    reactions: [
      {
        reactionBody: "Mine hated the humidity at first too. Try adjusting airflow!",
        username: "CapCollector",
        createdAt: new Date("2025-04-26T11:10:00Z"),
      },
    ],
  },
];
