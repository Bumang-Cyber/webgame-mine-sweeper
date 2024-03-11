import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  screen: {
    width: string;
    height: string;
  };
}

const Layout = ({ children, screen }: LayoutProps) => {
  const { width, height } = screen;
  // TODO: 전역상태를 이용하여 게임 오버, 게임 성공 상태 조건적 렌더
  return (
    <ScreenWrapper>
      <Title>MineSweeper</Title>
      {/* TODO: 테이블 콘테이너 컴포넌트로 분리하기 */}
      <TableContainer $width={width} $height={height}>
        {/* TODO: 게임 오버 & 성공 모달창 */}
        {children}
      </TableContainer>
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

export const Title = styled.span`
  ${({ theme }) => theme.font.subtitle1}
`;

export const TableContainer = styled.table<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
