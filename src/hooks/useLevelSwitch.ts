import { useDispatch, useSelector } from "react-redux";
import { change } from "@store/levelSlice";

import { type RootState } from "@store/index";
import { type LevelKeyType, type LevelValueType } from "@/types/level";
import { levels } from "@/constants/level";

const useLevelSwitch = () => {
  // useLevelSwitch 훅으로 정리하기 (커스텀 레벨까지)
  const dispatchLevel = useDispatch();
  const currentLevel = useSelector((state: RootState) => {
    return state.levels.value;
  });

  const levelKeys: LevelKeyType[] = ["Beginner", "Intermediate", "Expert", "Custom"];
  const levelValues: LevelValueType[] = Object.values(levels);

  const currentLevelStatus = levelValues.find(({ Y, TITLE }) => TITLE === currentLevel && Y)!;

  const levelSwitchHandler = (name: LevelKeyType) => {
    if (name === "Custom") {
      return;
    } else {
      dispatchLevel(change(name));
    }
  };

  return { currentLevel, currentLevelStatus, levelSwitchHandler, levels, levelKeys, levelValues };
};

export default useLevelSwitch;
