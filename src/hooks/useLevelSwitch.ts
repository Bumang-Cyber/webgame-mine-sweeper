import { useDispatch, useSelector } from "react-redux";
import { change } from "@store/levelSlice";

import { type RootState } from "@store/index";
import { LevelValueType, type LevelKeyType } from "@/types/level";
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

  const levelSwitchHandler = (level: LevelValueType) => {
    playingSwitchHandler("stale");
    if (level.TITLE === "Custom") {
      modalChangeHandler("Custom");
      dispatchLevel(change(level));
      return;
    }

    dispatchLevel(change(level));
  };

  return { currentLevel, levelSwitchHandler, levelKeys };
};

export default useLevelSwitch;
