import styled from "styled-components";
import LevelPanel from "./LevelPanel";
import GuidePanel from "./GuidePanel";
import SettingPanel from "./SettingPanel";

const ControlPanel = () => {
  return (
    <THead>
      <ControlPanelContainer>
        <LevelPanel />
        <GuidePanel />
        <SettingPanel />
      </ControlPanelContainer>
    </THead>
  );
};

export default ControlPanel;

const THead = styled.thead`
  width: 100%;
  // TODO: 전역상태관리로 currentLevel 선택해서 그걸로 바꾸기
  height: 60px;
`;

const ControlPanelContainer = styled.tr`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: black;
`;
