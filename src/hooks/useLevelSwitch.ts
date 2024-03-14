import { useDispatch, useSelector } from "react-redux";
import { change } from "@store/levelSlice";

import { type RootState } from "@store/index";
import { type LevelKeyType, type LevelValueType } from "@/types/level";
import { levels } from "@/constants/level";
import usePlayingSwitch from "./usePlayingSwitch";
import useModal from "./useModal";

const useLevelSwitch = () => {
  const { playingSwitchHandler } = usePlayingSwitch();
  const { modalChangeHandler } = useModal();
  const dispatchLevel = useDispatch();
  const currentLevel = useSelector((state: RootState) => {
    return state.levels.value;
  });

  const levelKeys: LevelKeyType[] = ["Beginner", "Intermediate", "Expert", "Custom"];
  const levelValues: LevelValueType[] = Object.values(levels);

  const currentLevelStatus = levelValues.find(({ Y, TITLE }) => TITLE === currentLevel && Y)!;

  const levelSwitchHandler = (level: LevelKeyType) => {
    playingSwitchHandler("stale");
    if (level === "Custom") {
      modalChangeHandler("Custom");
      return;
    }

    dispatchLevel(change(level));
  };

  return { currentLevel, currentLevelStatus, levelSwitchHandler, levels, levelKeys, levelValues };
};

export default useLevelSwitch;
