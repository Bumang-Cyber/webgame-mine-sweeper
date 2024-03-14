import { CgClose } from "react-icons/cg";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import useCustomSetting from "@/hooks/useCustomSetting";

const Custom = () => {
  const { modalChangeHandler } = useModal();
  const { height, width, mineAmount, validateHeight, validateWidth, validateMine, submitHandler } = useCustomSetting();

  const closeHandler = () => {
    const validate = submitHandler();
    if (!validate) return;

    modalChangeHandler("None");
  };

  return (
    <ModalContainer>
      <Header>
        <h1>Custom Setting</h1>
        <button>
          <CgClose onClick={closeHandler} className="close-icon" />
        </button>
      </Header>
      <Body>
        <h3>Game Height</h3>
        <Input onChange={validateHeight} value={height} />
        <h3>Game Width</h3>
        <Input onChange={validateWidth} value={width} />
        <h3>Mines amount</h3>
        <Input onChange={validateMine} value={mineAmount} />
        <span>Width & Height can be set in 10 ~ 100</span>
        <span>Mines have to be fewer than 1/3 of all tiles</span>
      </Body>
      <Footer>
        <button onClick={closeHandler}>Okay</button>
      </Footer>
    </ModalContainer>
  );
};

export default Custom;

const ModalContainer = styled.div`
  width: 400px;
  height: 360px;
  border-radius: 12px;
  background-color: white;

  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px;

  h1 {
    ${({ theme }) => theme.font.subtitle3};
  }
  h3 {
    ${({ theme }) => theme.font.body1b};
  }
  button {
    height: 48px;
    width: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    font-size: 32px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  flex-grow: 1;

  h3 {
    ${({ theme }) => theme.font.body2b};
  }

  h4 {
    ${({ theme }) => theme.font.body3r};
    margin-bottom: 8px;
  }

  span {
    ${({ theme }) => theme.font.caption1l};
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px;

  button {
    color: white;
    background-color: ${({ theme }) => theme.color.darkGray800};
    padding: 8px 24px;
    border-radius: 8px;
  }

  & button:hover {
    background-color: ${({ theme }) => theme.color.darkGray700};
  }
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 2px 16px;
  margin-bottom: 8px;
`;
