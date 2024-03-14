import { RootState } from "./../store/index";
import usePlayingSwitch from "./usePlayingSwitch";
import useLevelSwitch from "./useLevelSwitch";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/store/mineLeftSlice";
import { useEffect } from "react";

const useMineLeft = () => {
  const dispatchMineLeft = useDispatch();
  const currentMineLeft = useSelector((state: RootState) => {
    return state.mineLeft.value;
  });

  const { currentPlayingState } = usePlayingSwitch();
  const { currentLevelStatus } = useLevelSwitch();
  const { MINE } = currentLevelStatus;

  useEffect(() => {
    if (currentPlayingState === "stale") {
      dispatchMineLeft(change(MINE));
    } else if (currentPlayingState === "success") {
      dispatchMineLeft(change(0));
    }
    // eslint-disable-next-line
  }, [currentPlayingState]);

  const mineLeftHandler = (flagged: number) => {
    dispatchMineLeft(change(MINE - flagged));
  };

  const paddedMindLeft = `${currentMineLeft}`.padStart(3, "0");

  return { paddedMindLeft, mineLeftHandler };
};

export default useMineLeft;
