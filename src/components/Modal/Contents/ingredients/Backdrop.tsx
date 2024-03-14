import useModal from "@/hooks/useModal";
import styled from "styled-components";

const Backdrop = () => {
  const { modalChangeHandler } = useModal();
  return <Background onClick={() => modalChangeHandler("None")} />;
};

export default Backdrop;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  z-index: 2;
`;
