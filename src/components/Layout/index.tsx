import useGoalStatus from "@/hooks/useGoalStatus";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentPlayingState } = usePlayingSwitch();
  const { currentGoalAmount } = useGoalStatus();
  return (
    <ScreenWrapper onContextMenu={(e) => e.preventDefault()}>
      <div>currentPlayingState: {currentPlayingState}</div>
      <div>currentGoalAmount: {currentGoalAmount}</div>
      <OuterContainer>
        {/* TODO: 게임 오버 & 성공 모달창 */}
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
