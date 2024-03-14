import { CgClose } from "react-icons/cg";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import useLevelSwitch from "@/hooks/useLevelSwitch";

const Custom = () => {
  const { currentLevelStatus } = useLevelSwitch();
  const { X, Y, TITLE } = currentLevelStatus;
  const { modalChangeHandler } = useModal();

  const closeHandler = () => modalChangeHandler("None");

  const highScore = localStorage.getItem("highscore");
  let parsed = highScore ? JSON.parse(highScore) : "";
  if (parsed) {
    parsed = parsed[TITLE];
  }

  return (
    <ModalContainer>
      <Header>
        <h1>Congraturation!</h1>
        <button>
          <CgClose onClick={closeHandler} className="close-icon" />
        </button>
      </Header>
      <Body>
        <h3>GameLevel</h3>
        <h4>{TITLE}</h4>
        <h3>GameTime</h3>
        <h4>{parsed}</h4>
        <h3>GameMapSize</h3>
        <h4>
          width {X} x height {Y}
        </h4>
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
  height: 340px;
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
