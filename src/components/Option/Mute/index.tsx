import useSound from "@/hooks/useSound";

import { ImVolumeMedium as UnmutedIcon } from "react-icons/im";
import { ImVolumeMute as MutedIcon } from "react-icons/im";

import styled from "styled-components";

const Mute = () => {
  const { currentMuteState, muteHandler } = useSound();

  return (
    <Container>
      {currentMuteState ? ( //
        <MutedIcon onClick={() => muteHandler(false)} />
      ) : (
        <UnmutedIcon onClick={() => muteHandler(true)} />
      )}
    </Container>
  );
};

export default Mute;

const Container = styled.div`
  width: 20px;
  height: 20px;
  font-size: 16px;

  border-radius: 4px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray300};
  }
`;
