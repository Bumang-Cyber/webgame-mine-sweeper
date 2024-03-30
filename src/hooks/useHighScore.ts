import { useEffect, useState } from "react";
import useModal from "./useModal";
import useLevelSwitch from "./useLevelSwitch";

const useHighScore = () => {
  const { currentModal } = useModal();
  const { currentLevel } = useLevelSwitch();

  const [currentTime, setCurrentTime] = useState(localStorage.getItem("currentTime"));
  const [highScore, setHighScore] = useState(localStorage.getItem("highscore"));

  useEffect(() => {
    setCurrentTime(localStorage.getItem("currentTime"));
    const highScore = localStorage.getItem("highscore");

    if (highScore) {
      const parsedHighScore = JSON.parse(highScore);
      const parsedLevel = currentLevel;
      console.log(parsedHighScore, "HighScore");

      console.log(parsedHighScore[parsedLevel.TITLE], "parsedHighscore[parsedLevel]");
      setHighScore(parsedHighScore[parsedLevel.TITLE]);
    }

    //eslint-disable-next-line
  }, [currentModal]);

  return { currentTime, highScore };
};

export default useHighScore;
