import styled from "styled-components";

const TimerPanel = () => {
  return <TimerContainer>555</TimerContainer>;
};

export default TimerPanel;

const TimerContainer = styled.td`
  width: 32px;
  font-family: "digital";

  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  background-color: black;

  ${({ theme }) => theme.textOverflow};
  font-size: 12px;
`;
