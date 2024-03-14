const setScore = (TITLE: string, time: number, highscore: string | null) => {
  if (highscore) {
    console.log("!!!");
    const parsed = JSON.parse(highscore);
    if (parsed[TITLE] === null) {
      parsed[TITLE] = time;
    } else {
      parsed[TITLE] = Math.min(time, parsed[TITLE]);
    }
    console.log("!!!", parsed);
    localStorage.setItem("highscore", JSON.stringify(parsed));
    localStorage.setItem("currentTime", JSON.stringify(time));
  } else {
    console.log("???");
    const temp: { [key: string]: null | number } = {
      Beginner: null,
      Intermediate: null,
      Expert: null,
      Custom: null,
    };
    temp[TITLE] = time;
    localStorage.setItem("highscore", JSON.stringify(temp));
    localStorage.setItem("currentTime", JSON.stringify(time));
  }
};

export default setScore;
