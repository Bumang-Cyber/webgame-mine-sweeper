import styled from "styled-components";
import Modal from "../Modal";
import Content from "@components/Modal/Contents";
import useModal from "@hooks/useModal";
import usePersist from "@/hooks/usePersist";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentModal } = useModal();
  usePersist();

  return (
    <ScreenWrapper onContextMenu={(e) => e.preventDefault()}>
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
  ${({ theme }) => theme.unableToDrag}
`;

export const OuterContainer = styled.main`
  padding: 8px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.color.lightGray100};
  border-radius: 8px;

  position: relative;
  z-index: 1;
`;
