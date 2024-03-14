import useGoalStatus from "@/hooks/useCountTileMap";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";
import styled from "styled-components";
import Modal from "../Modal";
import Content from "@/components/Modal/Contents";
import useModal from "@/hooks/useModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentPlayingState } = usePlayingSwitch();
  const { currentGoalAmount } = useGoalStatus();
  const { currentModal, modalChangeHandler } = useModal();

  return (
    <ScreenWrapper onContextMenu={(e) => e.preventDefault()}>
      <div>currentPlayingState: {currentPlayingState}</div>
      <div>currentGoalAmount: {currentGoalAmount}</div>
      <div>currentModal: {currentModal}</div>
      <button onClick={() => modalChangeHandler("Success")}>성공버튼</button>
      <button onClick={() => modalChangeHandler("PersonalBest")}>퍼스널베스트 버튼</button>
      <OuterContainer>
        <Modal>{currentModal !== "None" && <Content type={currentModal} />}</Modal>
        {children}
      </OuterContainer>
    </ScreenWrapper>
  );
};

export default Layout;

export const ScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const OuterContainer = styled.main`
  padding: 8px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.color.lightGray100};
  border-radius: 8px;

  position: relative;
  z-index: 1;
`;
