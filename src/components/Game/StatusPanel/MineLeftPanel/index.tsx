import styled from "styled-components";

const MineLeftPanel = () => {
  return <MineLeftContainer>050</MineLeftContainer>;
};

export default MineLeftPanel;

const MineLeftContainer = styled.td`
  width: 32px;
  font-family: "digital";

  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  background-color: black;

  ${({ theme }) => theme.textOverflow};
  font-size: 12px;
`;
