import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>;
    </S.Wrapper>
  );
};

export default Layout;
