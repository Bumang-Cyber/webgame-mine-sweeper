export const levels = {
  BEGINNER: {
    TITLE: "Beginner",
    X: 8,
    Y: 8,
    MINE: 10,
    screen: {
      width: "460px",
      height: "520px",
    },
  },
  INTERMEDIATE: {
    TITLE: "Intermediate",
    X: 16,
    Y: 16,
    MINE: 40,
    screen: {
      width: "540px",
      height: "600px",
    },
  },
  EXPERT: {
    TITLE: "Expert",
    X: 32,
    Y: 16,
    MINE: 100,
    screen: {
      width: "600px",
      height: "660px",
    },
  },
} as const;
