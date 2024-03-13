import { RootState } from "./../store/index";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/store/playingStateSlice";
import { playingType } from "@/types/playing";

const usePlayingSwitch = () => {
  const dispatchPlayingState = useDispatch();
  const currentPlayingState = useSelector((state: RootState) => {
    return state.playing.value;
  });

  const playingStates: playingType[] = ["stale", "playing", "gameOver", "success"];

  const playingSwitchHandler = (state: playingType) => {
    dispatchPlayingState(change(state));
  };

  return { currentPlayingState, playingSwitchHandler, playingStates };
};

export default usePlayingSwitch;
