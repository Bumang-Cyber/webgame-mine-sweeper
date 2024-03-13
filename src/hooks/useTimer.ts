import { useEffect, useState } from "react";
import useLevelSwitch from "./useLevelSwitch";
import usePlayingSwitch from "./usePlayingSwitch";

// interface highscoreProps {
//   Beginner : number;
//   Intermediate : number;
//   Expert : number;
//   Custom : number;
// }

const useTimer = () => {
  const { currentLevel } = useLevelSwitch();
  const { currentPlayingState } = usePlayingSwitch();

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (currentPlayingState === "stale") {
      setTime(0);
      return;
    } else if (currentPlayingState === "success") {
      const highscore = localStorage.getItem("highscore");
      if (highscore) {
        const parsed = JSON.parse(highscore);
        parsed[currentLevel] = Math.min(time, parsed[currentLevel]);
        console.log(parsed, "parsed");
        localStorage.setItem("highscore", JSON.stringify(parsed));
      } else {
        const temp = {
          Beginner: 0,
          Intermediate: 0,
          Expert: 0,
          Custom: 0,
        };
        temp[currentLevel] = time;
        localStorage.setItem("highscore", JSON.stringify(temp));
      }

      return;
    } else if (currentPlayingState === "gameOver") {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setTime((prev) => prev + 1);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentLevel, currentPlayingState]);

  const paddedTime = `${time}`.padStart(3, "0");
  return { paddedTime };
};

export default useTimer;
