import { type LevelValueType } from "@/types/level";

export const levels: { [key: string]: LevelValueType } = {
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
