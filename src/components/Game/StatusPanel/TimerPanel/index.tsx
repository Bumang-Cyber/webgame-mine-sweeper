import useTimer from "@/hooks/useTimer";
import styled from "styled-components";

const TimerPanel = () => {
  const { paddedTime } = useTimer();

  return <TimerContainer>{paddedTime}</TimerContainer>;
};

export default TimerPanel;

const TimerContainer = styled.td`
  width: 36px;
  height: 24px;
  font-family: "digital";

  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  background-color: black;

  ${({ theme }) => theme.textOverflow};
  font-size: 24px;
`;
