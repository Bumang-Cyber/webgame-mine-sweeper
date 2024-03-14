import { useEffect } from "react";
import useLevelSwitch from "./useLevelSwitch";
import useGoalStatus from "./useCountTileMap";

const useGoalSwitch = () => {
  const { currentLevel } = useLevelSwitch();
  const { X, Y, MINE } = currentLevel;

  const { setGoalToSucceed } = useGoalStatus();

  useEffect(() => {
    setGoalToSucceed(MINE, X, Y);

    // eslint-disable-next-line
  }, [currentLevel]);
};

export default useGoalSwitch;
