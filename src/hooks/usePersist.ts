import { useEffect } from "react";
import useLevelSwitch from "@hooks/useLevelSwitch";

const usePersist = () => {
  const { levelSwitchHandler } = useLevelSwitch();
  useEffect(() => {
    const localLevel = localStorage.getItem("level");
    if (localLevel) {
      const parsed = JSON.parse(localLevel);
      levelSwitchHandler(parsed);
    }
    // eslint-disable-next-line
  }, []);
};

export default usePersist;
