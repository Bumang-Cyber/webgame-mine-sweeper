import styled from "styled-components";
import MineLeftPanel from "./MineLeftPanel";
import RestartEmojiPanel from "./RestartEmojiPanel";
import TimerPanel from "./TimerPanel";

const StatusPanel = () => {
  return (
    <StatusPanelContainer>
      <Tr>
        <MineLeftPanel />
        <RestartEmojiPanel />
        <TimerPanel />
      </Tr>
    </StatusPanelContainer>
  );
};

export default StatusPanel;

const StatusPanelContainer = styled.thead`
  width: 100%;
  height: 30px;

  ${({ theme }) => theme.borderInset}
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
