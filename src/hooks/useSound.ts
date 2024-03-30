import musicFlag from "@/assets/music-flag.wav";
import musicGameOver from "@/assets/music-game-over.wav";
import musicHighScore from "@/assets/music-highscore.wav";
import musicLeftClick from "@/assets/music-leftClick.wav";
import musicQuestion from "@/assets/music-question.wav";
import musicWin from "@/assets/music-win.wav";
import musicReset from "@/assets/music-reset.wav";

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
  return { soundLeftClick, soundFlag, soundQuestion, soundGameOver, soundHighScore, soundWin, soundReset };
};

export default useSound;
