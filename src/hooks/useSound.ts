import musicFlag from "@/assets/music-flag.wav";
import musicGameOver from "@/assets/music-game-over.wav";
import musicHighScore from "@/assets/music-highscore.wav";
import musicLeftClick from "@/assets/music-leftClick.wav";
import musicQuestion from "@/assets/music-question.wav";
import musicWin from "@/assets/music-win.wav";
import musicReset from "@/assets/music-reset.wav";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../store/index";
import { change } from "@/store/levelSlice";

export const soundLeftClick = new Audio(musicLeftClick);
export const soundFlag = new Audio(musicFlag);
export const soundQuestion = new Audio(musicQuestion);
export const soundGameOver = new Audio(musicGameOver);
export const soundHighScore = new Audio(musicHighScore);
export const soundWin = new Audio(musicWin);
export const soundReset = new Audio(musicReset);

// 각각의 Audio 객체에 preload 속성을 설정하여 미리 로드
soundFlag.preload = "auto";
soundGameOver.preload = "auto";
soundHighScore.preload = "auto";
soundLeftClick.preload = "auto";
soundQuestion.preload = "auto";
soundWin.preload = "auto";
soundWin.volume = 0.5;
soundReset.preload = "auto";

const useSound = () => {
  const dispatchMuteState = useDispatch();
  const currentMuteState = useSelector((state: RootState) => {
    return state.mute.value;
  });

  const muteHandler = (state: boolean) => {
    dispatchMuteState(change(state));
  };

  const playSoundHandler = (state: "soundLeftClick" | "soundFlag" | "soundQuestion" | "soundGameOver" | "soundHighScore" | "soundWin" | "soundReset") => {
    if (currentMuteState) return;
    switch (state) {
      case "soundLeftClick":
        soundLeftClick.play();
        break;
      case "soundFlag":
        soundFlag.play();
        break;
      case "soundQuestion":
        soundQuestion.play();
        break;
      case "soundGameOver":
        soundGameOver.play();
        break;
      case "soundHighScore":
        soundHighScore.play();
        break;
      case "soundWin":
        soundWin.play();
        break;
      case "soundReset":
        soundReset.play();
        break;
    }
  };

  return { currentMuteState, playSoundHandler, muteHandler };
};

export default useSound;
