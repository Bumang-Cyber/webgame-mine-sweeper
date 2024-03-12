import { LevelKeyType } from "./../types/level";

interface LevelsProps {
  Beginner: {
    TITLE: LevelKeyType;
    X: number;
    Y: number;
    MINE: number;
  };
  Intermediate: {
    TITLE: LevelKeyType;
    X: number;
    Y: number;
    MINE: number;
  };
  Expert: {
    TITLE: LevelKeyType;
    X: number;
    Y: number;
    MINE: number;
  };
  Custom: {
    TITLE: LevelKeyType;
    X: number;
    Y: number;
    MINE: number;
  };
}

export const levels: LevelsProps = {
  Beginner: {
    TITLE: "Beginner",
    X: 8,
    Y: 8,
    MINE: 10,
  },
  Intermediate: {
    TITLE: "Intermediate",
    X: 16,
    Y: 16,
    MINE: 40,
  },
  Expert: {
    TITLE: "Expert",
    X: 32,
    Y: 16,
    MINE: 100,
  },
  Custom: {
    TITLE: "Custom",
    X: 32,
    Y: 16,
    MINE: 100,
  },
} as const;
