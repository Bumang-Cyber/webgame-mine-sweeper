import { useState } from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

import { IoVolumeMedium } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import { AiOutlineColumnWidth } from "react-icons/ai";

const Option = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  return (
    <OptionContainer>
      <Dropdown />
      <RightOption>
        <IconButton>
          <AiOutlineColumnWidth />
        </IconButton>
        <IconButton>{isSoundOn ? <IoVolumeMedium /> : <IoVolumeMute />}</IconButton>
      </RightOption>
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

export const RightOption = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  ${({ theme }) => theme.font.subtitle5r}
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray300};
  }
`;
