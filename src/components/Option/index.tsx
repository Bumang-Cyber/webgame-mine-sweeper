import styled from "styled-components";

import Dropdown from "./Dropdown";
import Mute from "./Mute";

const Option = () => {
  return (
    <OptionContainer>
      <Dropdown />
      <Mute />
    </OptionContainer>
  );
};

export default Option;

export const OptionContainer = styled.section`
  width: 100%;
  height: 28px;
  padding: 4px;

  display: flex;
  justify-content: space-between;
`;
