import usePlayingSwitch from "@/hooks/usePlayingSwitch";
import { soundReset } from "@/hooks/useSound";
import styled from "styled-components";

const RestartEmojiPanel = () => {
  const { currentPlayingState, playingSwitchHandler } = usePlayingSwitch();

  const clickEmojiHander = () => {
    soundReset.play();
    playingSwitchHandler("stale");
  };

  return (
    <RestartEmojiContainer onClick={clickEmojiHander}>
      {currentPlayingState === "stale" && "🙂"}
      {currentPlayingState === "playing" && "😀"}
      {currentPlayingState === "gameOver" && "🤯"}
      {currentPlayingState === "success" && "😎"}
    </RestartEmojiContainer>
  );
};

export default RestartEmojiPanel;

const RestartEmojiContainer = styled.td`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.borderOutset}
`;
