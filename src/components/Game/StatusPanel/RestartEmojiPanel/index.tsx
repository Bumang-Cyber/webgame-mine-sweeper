import styled from "styled-components";

const RestartEmojiPanel = () => {
  return <RestartEmojiContainer>🙂</RestartEmojiContainer>;
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
