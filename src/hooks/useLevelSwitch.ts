import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/levelSlice";

import { type RootState } from "../store/index";
import { type LevelKeyType } from "../types/level";
import { levels } from "../constants/level";

const useLevelSwitch = () => {
  // useLevelSwitch 훅으로 정리하기 (커스텀 레벨까지)
  const dispatchLevel = useDispatch();
  const currentLevel = useSelector((state: RootState) => {
    return state.levels.value;
  });

  const levelKeys: LevelKeyType[] = ["Beginner", "Intermediate", "Expert", "Custom"];
  const levelValues = Object.values(levels);

  const currentLevelStatus = levelValues.find(({ Y, TITLE }) => TITLE === currentLevel && Y);

  const levelSwitchHandler = (name: LevelKeyType) => {
    if (name === "Custom") {
      return;
    } else {
      dispatchLevel(change(name));
    }
  };
  // const xTileAmountByLevels = levelValues.map(({ X }) => ({ X }));
  // const yTileAmountByLevels = levelValues.map(({ Y }) => ({ Y }));

  // 최근 레벨
  // 레벨들의 키
  //
  // 최근 레벨의 X타일 갯수
  // 최근 레벨의 Y타일 갯수
  // 최근 레벨의 지뢰 갯수
  // dispatch (레벨 변환)
  // LevelKeyType

  return { currentLevel, currentLevelStatus, levelSwitchHandler, levels, levelKeys, levelValues };
};

export default useLevelSwitch;
