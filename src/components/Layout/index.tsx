import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // TODO: 전역상태를 이용하여 게임 오버, 게임 성공 상태 조건적 렌더
  return (
    <ScreenWrapper>
      {/* TODO: 테이블 콘테이너 컴포넌트로 분리하기 */}
      <OuterContainer>
        {/* TODO: 게임 오버 & 성공 모달창 */}
        {children}
      </OuterContainer>
    </ScreenWrapper>
  );
};

export default Layout;

export const ScreenWrapper = styled.div`
  // TODO: 폰트 이쁜걸로
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const OuterContainer = styled.main`
  padding: 20px;
  padding-top: 0;
  background-color: beige;
  border-radius: 16px;
`;
