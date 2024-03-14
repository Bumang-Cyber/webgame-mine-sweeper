import { useState } from "react";
import useLevelSwitch from "./useLevelSwitch";

const useCustomSetting = () => {
  const { levelSwitchHandler } = useLevelSwitch();

  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(10);
  const [mineAmount, setMineAmount] = useState(10);

  const validateHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value || e.target.value === "") {
      setHeight(value);
      if (value > 100) {
        setHeight(100);
      }
    }
  };

  const validateWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value || e.target.value === "") {
      setWidth(value);
      if (value > 100) {
        setWidth(100);
      }
    }
  };

  const validateMine = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const ceil = Math.floor((height * width) / 3);

    if (value || e.target.value === "") {
      setMineAmount(value);
      if (value > ceil) {
        setMineAmount(ceil);
      }
    }
  };

  const submitHandler = () => {
    const ceil = Math.floor((height * width) / 3);

    if (height < 10 || width < 10) {
      alert("width & height can't be under 10");
      return false;
    }

    if (height <= 100 && width <= 100 && mineAmount <= ceil) {
      // 커스텀 설정으로 전역 상태 바꾸기
      levelSwitchHandler({
        TITLE: "Custom",
        X: height,
        Y: width,
        MINE: mineAmount,
      });

      return true;
    } else {
      alert("One or more values are over the limit.");
    }
  };

  return { height, width, mineAmount, validateHeight, validateWidth, validateMine, submitHandler };
};

export default useCustomSetting;
