import { useState } from "react";
import styled from "styled-components";

import { IoVolumeMedium } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";

const Option = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  return (
    <OptionContainer>
      <GameOptionButton>Game</GameOptionButton>
      <SoundOnOffButton>{isSoundOn ? <IoVolumeMedium /> : <IoVolumeMute />}</SoundOnOffButton>
    </OptionContainer>
  );
};

export default Option;

export const OptionContainer = styled.section`
  width: 100%;
  padding: 4px;

  display: flex;
  justify-content: space-between;
`;

export const GameOptionButton = styled.button`
  ${({ theme }) => theme.font.body3r}
`;

export const SoundOnOffButton = styled.button`
  ${({ theme }) => theme.font.subtitle5r}
`;
