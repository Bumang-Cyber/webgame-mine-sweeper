import { useState } from "react";
import styled from "styled-components";

import { levelMenus } from "./levelMenus";
import { FaCheck } from "react-icons/fa";

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const switchVisibleHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Wrapper>
      <GameOption onClick={switchVisibleHandler}>Game</GameOption>
      <MenuContainer $isVisible={isVisible}>
        <MenuItem $select={false}>
          <FaCheck className="icon" />
          New (f12)
        </MenuItem>
        <Divider />
        {levelMenus.map(({ name, select }) => (
          <MenuItem $select={select}>
            <FaCheck className="icon" />
            {name}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem $select={false}>
          <FaCheck className="icon" />
          Personal Best
        </MenuItem>
      </MenuContainer>
    </Wrapper>
  );
};
export default Dropdown;

const Wrapper = styled.section`
  position: relative;
`;

export const GameOption = styled.button`
  ${({ theme }) => theme.font.caption1b}
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray300};
  }
`;

const MenuContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;

  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.lightGray100};
  border: 4px double ${({ theme }) => theme.color.darkGray600};
`;

const MenuItem = styled.div<{ $select: boolean }>`
  padding: 2px 4px;
  width: 88px;
  ${({ theme }) => theme.font.caption2b}
  background-color: ${({ theme }) => theme.color.lightGray100};

  display: flex;
  gap: 2px;
  align-items: center;

  &:hover {
    color: blue;
  }

  .icon {
    opacity: ${({ $select }) => !$select && 0};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGray400};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray400};
  background-color: ${({ theme }) => theme.color.lightGray300};
`;
