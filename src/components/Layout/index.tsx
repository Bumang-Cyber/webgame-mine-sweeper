import usePlayingSwitch from "@/hooks/usePlayingSwitch";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // TODO: 게임 상태 개발 끝나고 지우기
  const { currentPlayingState } = usePlayingSwitch();
  return (
    <ScreenWrapper onContextMenu={(e) => e.preventDefault()}>
      {currentPlayingState}
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
