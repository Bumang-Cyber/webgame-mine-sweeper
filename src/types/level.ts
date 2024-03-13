export type LevelKeyType = "Beginner" | "Intermediate" | "Expert" | "Custom";

export interface LevelValueType {
  TITLE: LevelKeyType;
  X: number;
  Y: number;
  MINE: number;
}
