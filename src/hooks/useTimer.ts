import { useEffect, useState } from "react";
import useLevelSwitch from "./useLevelSwitch";
import usePlayingSwitch from "./usePlayingSwitch";

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
      console.log(highscore, "hs");
      if (highscore) {
        console.log("in true");
        const parsed = JSON.parse(highscore);
        if (parsed[currentLevel] === null) {
          parsed[currentLevel] = time;
        } else {
          parsed[currentLevel] = Math.min(time, parsed[currentLevel]);
        }

        localStorage.setItem("highscore", JSON.stringify(parsed));
      } else {
        const temp: { [key: string]: null | number } = {
          Beginner: null,
          Intermediate: null,
          Expert: null,
          Custom: null,
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
